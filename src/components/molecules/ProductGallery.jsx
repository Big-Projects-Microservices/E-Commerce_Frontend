import { useProductImage } from "../../hooks/useProductImage";

export default function ProductGallery({ images }) {
  const {
    activeImg,
    isMainImageBroken,
    brokenThumbnails,
    selectImage,
    markMainImageAsBroken,
    markThumbnailAsBroken,
    hasImages
  } = useProductImage(images);

  const MainNoImagePlaceholder = (
    <div className="bg-gray-100 rounded-xl h-[300px] sm:h-[400px] w-full flex flex-col items-center justify-center text-gray-400 gap-2">
      <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
      <span className="font-medium">No Image</span>
    </div>
  );

  const ThumbnailPlaceholder = (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded text-gray-300">
       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
    </div>
  );

  if (!hasImages) {
    return MainNoImagePlaceholder;
  }

  return (
    <div className="flex flex-col gap-6">
      
      {isMainImageBroken ? (
        MainNoImagePlaceholder
      ) : (
        <div className="bg-[#F6F6F6] rounded-xl h-[300px] sm:h-[400px] w-full flex items-center justify-center p-8 relative overflow-hidden group">
          <img
            src={activeImg}
            alt="Product Main"
            onError={markMainImageAsBroken}
            className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex gap-4 justify-center overflow-x-auto pb-2 px-1">
        {images.map((img, index) => {
          const isActive = activeImg === img;
          const isBroken = brokenThumbnails[index];

          return (
            <div
              key={index}
              onClick={() => selectImage(img)}
              className={`
                w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg p-2 cursor-pointer bg-white border-2 transition-all duration-200
                ${isActive ? "border-blue-500 shadow-sm" : "border-transparent hover:border-gray-200"}
              `}
            >
              {isBroken ? (
                ThumbnailPlaceholder
              ) : (
                <img
                  src={img}
                  alt={`thumb-${index}`}
                  onError={() => markThumbnailAsBroken(index)}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}