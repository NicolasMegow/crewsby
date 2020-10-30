import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video" style={{ textAlign: "center" }}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      style={{
        width: "100vw",
        height: "50vh",
        maxWidth: "700px",
      }}
    />
  </div>
)
export default Video

//<div style="max-width:854px"><div style="position:relative;height:0;padding-bottom:56.25%"><iframe src="https://embed.ted.com/talks/john_doerr_why_the_secret_to_success_is_setting_the_right_goals" width="854" height="480" style="position:absolute;left:0;top:0;width:100%;height:100%" frameborder="0" scrolling="no" allowfullscreen></iframe></div></div>
