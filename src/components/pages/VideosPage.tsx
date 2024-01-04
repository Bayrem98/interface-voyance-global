import { Card, CardBody, CardHeader } from "reactstrap";
import { Player } from "video-react";

const VideosPage = () => {
  return (
    <>
      <div className="" style={{ marginTop: 20 }}>
        <h2
          style={{
            textAlign: "center",
            color: "rgba(147, 147, 203, 0.866)",
            fontStyle: "oblique",
          }}
        >
          Des vidéos sur vous choix
        </h2>
        <br />
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 20, marginRight: 20, marginBottom: 200 }}
        >
          <Card style={{ width: 300 }}>
            <CardHeader
              style={{
                textAlign: "center",
              }}
            >
              <img src="/videos/justice.png" alt="." width={50} />
            </CardHeader>
            <CardBody>
              {" "}
              <Player poster="/videos/postervideo-balance.png">
                <source src="/videos/Horoscope Balance.mp4" />
              </Player>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardHeader
              style={{
                textAlign: "center",
              }}
            >
              <img src="/videos/capricorne.png" alt="." width={50} />
            </CardHeader>
            <CardBody>
              {" "}
              <Player poster="/videos/postervideo-capricorne.png">
                <source src="/videos/Horoscope Capricorne.mp4" />
              </Player>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardHeader
              style={{
                textAlign: "center",
              }}
            >
              <img src="/videos/sagittaire.png" alt="." width={50} />
            </CardHeader>
            <CardBody>
              {" "}
              <Player poster="/videos/postervideo-sagittaire.png">
                <source src="/videos/Horoscope Sagittaire.mp4" />
              </Player>
            </CardBody>
          </Card>
          <Card style={{ width: 300 }}>
            <CardHeader
              style={{
                textAlign: "center",
              }}
            >
              <img src="/videos/lion.png" alt="." width={50} />
            </CardHeader>
            <CardBody>
              {" "}
              <Player poster="/videos/postervideo-lion.png">
                <source src="/videos/Horoscope Lion.mp4" />
              </Player>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default VideosPage;
