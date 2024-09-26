import "/src/styles/global.scss";

export default function ArtDesign() {
  const arr = [
    "https://dmychel.github.io/zealout-images/art_design/ed.png",
    "https://dmychel.github.io/zealout-images/art_design/TORQUE24.png",
    "https://dmychel.github.io/zealout-images/art_design/alejandro.png",
    "https://dmychel.github.io/zealout-images/art_design/neo.png",
    "https://dmychel.github.io/zealout-images/art_design/mac.png",
  ];

  return (
    <div className="index">
      <h2>Art and Design</h2>
      <div className="content gallery">
        {arr.map((img, index) => (
          <img src={img} alt="error" key={index} />
        ))}
      </div>
    </div>
  );
}
