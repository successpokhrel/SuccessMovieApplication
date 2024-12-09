type HeaderProps = {
    title: string;
    description: string;
    backgroundImage?: string;
  }
  
  export default function CustomHeader({ title, description, backgroundImage }: HeaderProps) {
    const backgroundStyle = backgroundImage
      ? { backgroundImage: `url(${backgroundImage})` }
      : { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
  
    return (
      <div className="banner-header" style={backgroundStyle}>
        <div className="overlay">
          <div className="content-container flex flex-col ml-10 mt-2 gap-5">
            <h1 className="text-white text-6xl font-bold drop-shadow-md">{title}</h1>
            <p className="text-white text-lg drop-shadow-lg">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  