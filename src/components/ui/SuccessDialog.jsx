export const SuccessDialog = ({ isOpen, onConfirm, email }) => {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[70]" onClose={() => { }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border-4 border-[#9D7E6B]">
                                <Dialog.Title
                                    as="h3"
                                    className="text-xl font-bold leading-6 text-[#9D7E6B] flex items-center gap-2 uppercase tracking-wide"
                                >
                                    <FaPaw className="text-[#FAC19E]" />
                                    ALOA
                                </Dialog.Title>
                                <div className="mt-4">
                                    <p className="text-sm text-gray-500">
                                        Hemos enviado un correo de verificación a <strong>{email}</strong> con un enlace para confirmar tu identidad.
                                    </p>

                                </div>

                                <div className="mt-6 flex justify-end">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-full border border-transparent bg-[#FAC19E] px-6 py-2 text-sm font-bold text-[#5c3d2e] hover:bg-[#ffb685] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9D7E6B] focus-visible:ring-offset-2 transition-colors shadow-md"
                                        onClick={onConfirm}
                                    >
                                        Aceptar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};
