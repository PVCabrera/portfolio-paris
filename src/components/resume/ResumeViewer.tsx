const ResumeViewer = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        src="https://drive.google.com/file/d/1wcJkww7kFv2TPrgUiPELL8y3eCVjIOll/view"
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
