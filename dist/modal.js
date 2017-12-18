import Overlay from 'overlay-basis/src/overlay';

export default class {
    static init() {

        // create modal's overlay
        this.overlay = new Overlay();

        // register triggering events
        registerEvents(this);
    }

    static show(modal) {

        // show overlay if not explicitly forbidden
        if (! modal.classList.contains('--no-overlay')) {

            // lock overlay if need be
            if (modal.classList.contains('--lock-overlay')) {
                this.overlay.lock();
            }

            this.overlay.show();
        }

        modal.classList.add('is-visible');
    }

    static hide(modal) {
        modal.classList.remove('is-visible');

        // if there are no other modal element on view, the overlay has to be hidden as well
        if (! document.querySelectorAll('.modal.is-visible').length) {
            this.overlay.hide();
        }
    }
}

function registerEvents(ModalClass) {

    // listen to a click event on a trigger element
    document.querySelector('body').addEventListener('click', function(e) {
        let clickedElement = e.target;

        // opening the 'modal' element
        // ===========================

        // allow nested clicked element
        if (clickedElement.closest('[data-toggle="modal"]')) {
            clickedElement = clickedElement.closest('[data-toggle="modal"]')
        }

        // clicked element has to target explicitly a 'modal' element
        if (clickedElement.dataset.toggle === 'modal') {

            let modal;

            // targeted 'modal' element is passed via data-target attribute
            if (clickedElement.dataset.target) {
                let modalSelector = clickedElement.dataset.target;
                modal = document.querySelector(modalSelector);
            }

            // targeted 'modal' element is passed via href attribute
            else if (clickedElement.getAttribute('href')) {
                let modalSelector = clickedElement.getAttribute('href');
                modal = document.querySelector(modalSelector);
            }

            // targeted 'modal' element belongs to the same '.modal-group' than trigger
            else {
                let modalGroup = clickedElement.closest('.modal-group');

                if (modalGroup) {
                    modal = modalGroup.querySelector('.modal');
                }
            }

            if (modal) {
                ModalClass.show(modal);
            }
        }

        // closing the 'modal' element
        // ===========================

        // dismiss button has to be nested inside the 'modal' element
        if (clickedElement.classList.contains('dismiss') && clickedElement.closest('.modal')) {
            let modal = clickedElement.closest('.modal');
            ModalClass.hide(modal);
        }
    });


    // closing modals along with overlay
    // =================================

    let overlay = ModalClass.overlay.domElement;
    overlay.addEventListener('hiding', () => {

        // hide every modals
        let modals = document.querySelectorAll('.modal');
        [...modals].forEach(function(modal) {
            ModalClass.hide(modal);
        });
    });
}
