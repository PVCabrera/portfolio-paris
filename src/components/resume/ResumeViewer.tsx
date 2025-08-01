const ResumeViewer = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://drive.google.com/file/d/1KTVvDG8L5Nw8KQVYKLOvSc96A9uoaUyv/preview"
        width="100%"
        height="100%"
        title="Resume PDF"
        style={{ border: "none" }}
        allow="autoplay"
      />
    </div>
  );
};

export default ResumeViewer;
