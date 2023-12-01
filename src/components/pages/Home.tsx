import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="home container d-flex justify-content-between">
        <div className="section1">
          <h2
            style={{
              color: "rgba(147, 147, 203, 0.866)",
              fontStyle: "oblique",
            }}
          >
            Voyance Global
          </h2>
          <p className="home-para">
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
        <div className="section2">
          <img className="home-imag1" src="/img/home/img-home-1.jpg" alt="." />
        </div>
      </div>
      <section className="section-slider">
        <Carousel controls={false} indicators={false}>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/img/home/home-slider-1.jpg" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/img/home/home-slider-n.png" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/img/home/home-slider-2.jpg" alt="." />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="slider" src="/img/home/home-slider-4.jpg" alt="." />
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
          <img className="lune-active" src="/home-lune.gif" alt="." />
        </div>
        <div className="d-flex justify-content-center">
          <p className="lune-active-para">
            {" "}
            <span
              className="lune-active-para1"
              style={{
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
      <section className="section4">
        <div className="carte-lune d-flex justify-content-between">
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
              className="nouvelle-lune-img"
              src="/img/home/nouvelle-lune.jpg"
              alt="."
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
              className="plein-lune-img"
              src="/img/home/plein-lune.jpg"
              alt="."
            />
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            {" "}
            <img
              className="calend-plein"
              src="/img/home/calendrier.jpg"
              alt="."
            />
          </div>
          <div className="calend-plein-para">
            <p className="plein-para">
              <span className="plein-para1">La pleine lune</span> est un
              phénomène astronomique qui se produit lorsque la Lune est alignée
              directement en face de la Terre par rapport au Soleil. Cela crée
              une illumination totale de la face visible de la Lune, de sorte
              qu'elle apparaît comme un disque lumineux et rond dans le ciel
              nocturne. Le calendrier lunaire est basé sur les phases de la
              Lune, qui comprennent quatre principales phases :
              <br />
              <span className="plein-para2">*Nouvelle Lune :</span> La Lune est
              située entre la Terre et le Soleil, de sorte que la face éclairée
              de la Lune n'est pas visible depuis la Terre. C'est le début du
              cycle lunaire.
              <br />
              <span className="plein-para2">*Premier quartier :</span> La moitié
              droite de la Lune est visible, tandis que l'autre moitié est
              obscurcie.
              <br />
              <span className="plein-para2">*Pleine Lune :</span> La face
              entière de la Lune est illuminée, apparaissant comme un disque
              complet.
              <br />
              <span className="plein-para2">*Dernier quartier :</span> La moitié
              gauche de la Lune est visible, tandis que l'autre moitié est
              obscurcie.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="calend-plein-para">
            <p className="nouvelle-para">
              <span className="nouvelle-para1">La Nouvelle Lune</span> est l'une
              des principales phases du cycle lunaire. Elle marque le début du
              cycle lorsque la Lune est située entre la Terre et le Soleil, de
              sorte que la face éclairée de la Lune n'est pas visible depuis la
              Terre. Pendant la Nouvelle Lune, la Lune se trouve directement
              entre la Terre et le Soleil, de sorte que la face éclairée de la
              Lune est tournée vers le Soleil, et la face sombre est tournée
              vers la Terre. Par conséquent, la Lune semble quasiment
              disparaître du ciel nocturne.Les phases lunaires suivent un cycle
              régulier qui dure environ 29,5 jours, appelé le mois lunaire. En
              général, le cycle des phases lunaires se répète chaque mois, avec
              des variations mineures en raison de l'irrégularité du mois
              lunaire. Contrairement au calendrier solaire du calendrier
              grégorien, le calendrier lunaire n'est pas basé sur un nombre fixe
              de jours par mois, car les mois lunaires sont légèrement plus
              courts que les mois solaires. Par conséquent, les dates des
              Nouvelles Lunes varieront d'une année à l'autre dans le calendrier
              lunaire.
            </p>
          </div>
          <div>
            <img
              className="calend-nouvelle"
              src="/img/home/calendrier-2.jpg"
              alt="."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="link-scroll">
          <Link to="/actualite" onClick={scrollToTop}>
            <p>Pour vous suivre lire a propos la lune appuiez içi</p>
          </Link>
        </div>
      </section>
    </>
  );
};
export default Home;
