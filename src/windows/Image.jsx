const ImageWindowContent = () => {
    const {windows} = useWindowStore();
    const data = windows.imgfile?.data ;

    if (!data) return null;

    const { name, imgageUrl } = data;

    return (
        <>
        <div id="window-header">
            <WindowControls target="imgfile"/>
            <h2>{name}</h2>
        </div>

        <div className="p-5 bg-white">
            {imgageUrl ?(
                <div className="w-full">
                    <img src={imgageUrl} alt={name} 
                    className="w-full h-auto rounded" />
                    </div> 
            ) : null}
        </div>
        </>
    );
};

const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");

export default ImageWindow;