const Container = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="w-full max-w-[1200px] mx-auto lg:px-0 px-5">
        {children}
      </div>
    );
  };
  
  export default Container;
  