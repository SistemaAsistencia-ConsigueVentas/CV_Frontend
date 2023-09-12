import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VideocamIcon from '@mui/icons-material/Videocam';

export const CameraSection = ({
    fotoUsuario,
    videoEnabled,
    capturing,
    handleCapture,
    toggleCamera,
    cameraStream,
    videoRef,
    isMobile,
    mostrarBotonCamara
}) => {
    return (
        <div className={`seccion-izquierda w-full mb-4 p-4 sm:p-6 lg:p-8`}>
            <div className={`w-full h-[80%] rounded-xl ${!fotoUsuario && !videoEnabled ? 'bg-slate-950 border-cv-cyan border-2' : ''} relative `}>
                <div className="absolute w-full h-full rounded-xl">
                    {fotoUsuario && (
                        <div>
                            <img src={fotoUsuario} alt="Foto capturada" className="rounded-xl object-contain border-2 border-cv-cyan" style={{ transform: "scaleX(-1)" }} />
                        </div>
                    )}
                    {!fotoUsuario && (
                        (videoEnabled ? (
                            <div className='h-[80%]'>
                                <div>
                                    <video
                                        className="rounded-xl h-full object-contain border-2 z-10 border-cv-cyan"
                                        ref={videoRef}
                                        style={{ display: videoEnabled ? 'block' : 'none' }}
                                        autoPlay
                                        playsInline
                                        muted
                                    />
                                    {mostrarBotonCamara && videoEnabled &&(
                                        <div className='flex items-center  justify-center -mt-14 z-20 relative'>
                                            <button
                                            className='w-12 h-12 max-[460px]:w-8 max-[460px]:h-8'
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "50%",
                                                    background: videoEnabled ? "transparent" : "#EF4444",
                                                    color: "#fff",
                                                    border: videoEnabled ? "2px solid #FFFFFF" : "2px solid #EF4444",
                                                }}
                                                onClick={toggleCamera}
                                            >
                                                <div className='text-xs'>
                                                <VideocamIcon
                                                className='text-gray-300 text-xs w-1 h-1' />
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                        ) : (
                            <div className="w-full h-full flex items-center justify-center">
                                <span className="text-white text-xl">Cámara desactivada</span>
                            </div>
                        ))
                    )}
                </div>
                <div className={`absolute bottom-0 sm:p-6 lg:p-8 w-full flex items-center 
                justify-center`}>
                    {mostrarBotonCamara && !videoEnabled &&(
                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                background: videoEnabled ? "transparent" : "#EF4444",
                                color: "#fff",
                                width: "3rem",
                                height: "3rem",
                                border: videoEnabled ? "2px solid #FFFFFF" : "2px solid #EF4444",
                            }}
                            onClick={toggleCamera}
                        >
                            <VideocamOffIcon style={{ color: "#FFFFFF" }} />
                        </button>
                    )}
                </div>
            </div>
            <div className='grid justify-items-center p-4 sm:p-6 lg:p-8'>
                {videoEnabled && (
                    <button
                        className="bg-cv-cyan hover:bg-cv-primary text-cv-primary hover:text-cv-cyan font-bold py-2 px-4 rounded mt-32 sm:mt-32 md:mt-20 lg:mt-24 xl:mt-32"
                        onClick={handleCapture}
                        disabled={capturing}
                    >
                        {capturing ? `Capturando` : 'Tomar foto'}
                    </button>
                )}
            </div>
        </div>
    );
};