import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        className="container d-flex justify-content-between"
        style={{ marginTop: 150 }}
      >
        <div className="section1">
          <h2
            style={{
              color: "rgba(147, 147, 203, 0.866)",
              fontStyle: "oblique",
            }}
          >
            Voyance Global
          </h2>
          <p style={{ textAlign: "justify" }}>
            est la destination incontournable pour les voyants en quête
            d'expansion de leurs compétences et de leur connaissance dans le
            domaine de la voyance. Notre plateforme est conçue pour les
            praticiens de la voyance, offrant une vaste gamme de ressources et
            de formations pour les aider à affiner leurs dons naturels et à
            maîtriser les techniques de voyance. Que vous soyez un débutant
            désireux d'acquérir une base solide ou un voyant expérimenté
            cherchant à perfectionner ses compétences, nous proposons des cours,
            des ateliers, des articles informatifs et des conseils pratiques.
            Rejoignez notre communauté de voyants passionnés et explorez un
            voyage d'apprentissage continu pour devenir un praticien de la
            voyance éclairé et accompli. À Voyance Global, nous croyons en
            l'importance de cultiver le talent et la sagesse dans le monde de la
            voyance.
          </p>
        </div>
        <span className="" style={{ width: 100 }}></span>
        <div className="section2">
          <img
            src="/img/home/img-home-1.jpg"
            alt="."
            style={{ width: 600, borderRadius: 20 }}
          />
        </div>
      </div>
      <section style={{ marginTop: 50, marginBottom: 50 }}>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img
              className="slider"
              src="/img/home/home-slider-1.jpg"
              alt="."
              width={1400}
              height={500}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="slider"
              src="/img/home/home-slider-n.png"
              alt="."
              width={1400}
              height={500}
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="slider"
              src="/img/home/home-slider-2.jpg"
              alt="."
              width={1400}
              height={500}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="slider"
              src="/img/home/home-slider-4.jpg"
              alt="."
              width={1400}
              height={500}
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section>
        <h2
          style={{
            textAlign: "center",
            color: "rgba(147, 147, 203, 0.866)",
            fontStyle: "oblique",
          }}
        >
          Mouvement Lunaire
        </h2>
        <br />
        <div className="d-flex justify-content-center">
          <video width={900} loop controls autoPlay>
            <source src="/home-lune.mp4" type="video/mp4" />
          </video>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <p style={{ textAlign: "justify", width: 900 }}>
            {" "}
            <span
              style={{
                fontSize: 30,
                color: "rgba(147, 147, 203, 0.866)",
                fontStyle: "oblique",
              }}
            >
              La lune
            </span>{" "}
            est depuis des siècles considérée comme une force de la nature et
            fascine toutes les cultures à travers le monde. À la fois
            responsable des marées océaniques et de la stabilité de l’axe de
            notre Terre, elle a aussi une grande influence sur notre corps. Mais
            comment peut-elle avoir une influence sur notre bien-être et notre
            santé alors qu’elle se trouve à des milliers de kilomètres de la
            Terre? Comme tu le sais certainement déjà, la lune est une partie
            essentielle de notre système solaire et maintient l’équilibre de la
            Terre sous contrôle, et a aussi une attraction sur nos mers et
            océans, à travers des marées montantes et descendantes. Sa force
            gravitationnelle a une influence sur la hauteur du niveau des mers.
            Si nous partons de ce principe, l’être humain est composé à 90 %
            d’eau : donc pourquoi la lune n’aurait-elle pas une influence sur
            nous également? Dans un sens plus spirituel, le cycle lunaire est la
            relation entre le soleil et la lune, la déesse et le dieu. Une
            pleine lune, par exemple, est considérée comme plus puissante parce
            que la pleine lumière du dieu illumine la déesse et brille sur nous.
            C’est une combinaison de deux des forces les plus puissantes de
            notre monde. Au fur et à mesure que la lumière s’estompe, son
            attraction intense disparaît également, jusqu’à ce que la nouvelle
            lune se déroule et que nous nous reposions, nous rechargions et
            recommençons.
          </p>
        </div>
      </section>
      <section style={{ marginTop: 50 }}>
        <div
          className="d-flex justify-content-between"
          style={{ marginBottom: 50 }}
        >
          <div>
            <h4
              style={{
                color: "rgba(147, 147, 203, 0.866)",
                fontStyle: "oblique",
                textAlign: "center",
              }}
            >
              Nouvelle-Lune
            </h4>
            <img
              src="/img/home/nouvelle-lune.jpg"
              alt="."
              width={600}
              style={{ borderRadius: 130, marginLeft: 5 }}
            />
          </div>
          <div>
            <h4
              style={{
                color: "rgba(147, 147, 203, 0.866)",
                fontStyle: "oblique",
                textAlign: "center",
              }}
            >
              Pleine-Lune
            </h4>
            <img
              src="/img/home/plein-lune.jpg"
              alt="."
              width={600}
              style={{ borderRadius: 130, marginRight: 5 }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            {" "}
            <img src="/img/home/calendrier.jpg" alt="." height={800} />
          </div>
          <div style={{ marginTop: 250 }}>
            <p style={{ textAlign: "justify", marginRight: 20 }}>
              <span
                style={{
                  fontSize: 30,
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                }}
              >
                La pleine lune
              </span>{" "}
              est un phénomène astronomique qui se produit lorsque la Lune est
              alignée directement en face de la Terre par rapport au Soleil.
              Cela crée une illumination totale de la face visible de la Lune,
              de sorte qu'elle apparaît comme un disque lumineux et rond dans le
              ciel nocturne. Le calendrier lunaire est basé sur les phases de la
              Lune, qui comprennent quatre principales phases :
              <br />
              <span
                style={{
                  fontSize: 25,
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                }}
              >
                *Nouvelle Lune :
              </span>{" "}
              La Lune est située entre la Terre et le Soleil, de sorte que la
              face éclairée de la Lune n'est pas visible depuis la Terre. C'est
              le début du cycle lunaire.
              <br />
              <span
                style={{
                  fontSize: 25,
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                }}
              >
                *Premier quartier :
              </span>{" "}
              La moitié droite de la Lune est visible, tandis que l'autre moitié
              est obscurcie.
              <br />
              <span
                style={{
                  fontSize: 25,
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                }}
              >
                *Pleine Lune :
              </span>{" "}
              La face entière de la Lune est illuminée, apparaissant comme un
              disque complet.
              <br />
              <span
                style={{
                  fontSize: 25,
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                }}
              >
                *Dernier quartier :
              </span>{" "}
              La moitié gauche de la Lune est visible, tandis que l'autre moitié
              est obscurcie.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div style={{ marginTop: 260 }}>
            <p style={{ textAlign: "justify", marginLeft: 20 }}>
              <span
                style={{
                  fontSize: 30,
                  color: "rgba(147, 147, 203, 0.866)",
                  fontStyle: "oblique",
                }}
              >
                La Nouvelle Lune
              </span>{" "}
              est l'une des principales phases du cycle lunaire. Elle marque le
              début du cycle lorsque la Lune est située entre la Terre et le
              Soleil, de sorte que la face éclairée de la Lune n'est pas visible
              depuis la Terre. Pendant la Nouvelle Lune, la Lune se trouve
              directement entre la Terre et le Soleil, de sorte que la face
              éclairée de la Lune est tournée vers le Soleil, et la face sombre
              est tournée vers la Terre. Par conséquent, la Lune semble
              quasiment disparaître du ciel nocturne.Les phases lunaires suivent
              un cycle régulier qui dure environ 29,5 jours, appelé le mois
              lunaire. En général, le cycle des phases lunaires se répète chaque
              mois, avec des variations mineures en raison de l'irrégularité du
              mois lunaire. Contrairement au calendrier solaire du calendrier
              grégorien, le calendrier lunaire n'est pas basé sur un nombre fixe
              de jours par mois, car les mois lunaires sont légèrement plus
              courts que les mois solaires. Par conséquent, les dates des
              Nouvelles Lunes varieront d'une année à l'autre dans le calendrier
              lunaire.
            </p>
          </div>
          <div className="">
            <img src="/img/home/calendrier-2.jpg" alt="." height={800} />
          </div>
        </div>
      </section>
      <section>
        <div style={{ marginLeft: 150, marginBottom: 50 }}>
          <Link to="/actualite" onClick={scrollToTop}>
            <p>Pour vous suivre lire a propos la lune appuiez içi</p>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Home;
