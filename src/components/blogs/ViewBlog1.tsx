import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ViewBlog1 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <FontAwesomeIcon
          className="blog1-icon-retour"
          icon={faCircleLeft}
          beat
          size="2xl"
          onClick={() => navigate(-1)}
        />
        <Card className="blog1-card">
          <h2 className="blog1-title">
            Quelle couleur est associée à votre signe astrologique ?
          </h2>
          <CardBody>
            <p className="blog1-para">
              Avant d’énumérer les couleurs associées à chaque signe
              astrologique, faisons un tour d’horizon sur les signes en
              question. L’astrologie divise le zodiaque en douze signes
              distincts. Chaque signe est associé à une série unique
              d’attributs, de caractéristiques et d’influences planétaires qui
              le rendent singulier. Ces signes sont regroupés en quatre éléments
              fondamentaux : Feu, Terre, Air et Eau, chacun apportant son propre
              ensemble de qualités.
            </p>
            <ul className="blog1-ul">
              <li className="blog1-li">
                <span className="blog1-span">
                  Les signes de Feu (Bélier, Lion, Sagittaire) sont connus pour
                  leur énergie, leur passion et leur dynamisme. Ils sont souvent
                  associés à des couleurs chaudes et vives comme le rouge et le
                  jaune, symbolisant leur esprit ardant.
                </span>
              </li>
              <li className="blog1-li">
                <span className="blog1-span">
                  Les signes de Terre (Taureau, Vierge, Capricorne) sont
                  pragmatiques, stables et axés sur la matérialité. Les couleurs
                  associées sont le vert et le brun, reflétant leur connexion à
                  la nature et à la croissance.
                </span>
              </li>
              <li className="blog1-li">
                <span className="blog1-span">
                  Les signes d’Air (Gémeaux, Balance, Verseau) sont
                  intellectuels, communicatifs et sociaux. Les teintes aériennes
                  comme le bleu clair et le pastel correspondent à leur nature
                  aérée.
                </span>
              </li>
              <li className="blog1-li">
                <span className="blog1-span">
                  Les signes d’Eau (Cancer, Scorpion, Poissons) sont
                  émotionnels, intuitifs et sensibles. Les couleurs associées
                  sont le bleu profond et le violet, évoquant leur profondeur
                  émotionnelle.
                </span>
              </li>
            </ul>
            <p className="blog1-para">
              Chaque signe astrologique possède ses propres couleurs qui
              reflètent ses caractéristiques uniques, et ces correspondances
              peuvent être utilisées pour choisir des vêtements, des décors ou
              des nuances qui favorisent l’harmonie et le bien-être personnel.
            </p>
            <h6 className="blog1-title2-3">
              *Pourquoi déterminer les couleurs associées à votre signe astro ?
            </h6>
            <p className="blog1-para">
              Psychologie des couleurs, chromothérapie, pouvoir de la
              colorimétrie… peu importe comment vous voulez l’appeler, toutes
              ces disciplines se réunissent autour d’une même idée : les
              couleurs ont un réel impact sur nos humeurs. Les sentiments et
              même l’énergie. Ainsi, puisque chaque signe du zodiaque est
              étroitement lié aux chakras, son énergie correspond également à la
              couleur, cette dernière devient le reflet de sa personnalité.
              Connaître sa couleur phare est bien plus qu’un simple détail
              anecdotique, cela permet de mieux cibler ses atouts, ses qualités
              inexploitées, et même les atouts qui sommeillent en vous. En fait,
              chaque couleur résonne d’une ambiance énergique : le rose apaise
              l’âme, le violet apporte un élan mental, le jaune respire la
              créativité, et bien plus encore. S’entourer de tons et de couleurs
              qui vous font du bien et qui résonnent avec votre signe peut vous
              aider à atteindre votre plein potentiel.
            </p>
            <h6 className="blog1-title2-3">
              *Laquelle des douze couleurs est associée à votre signe
              astrologique ?
            </h6>
            <br />
            <div>
              <ul className="blog1-ul">
                <li className="blog1-li">
                  <span className="blog1-span">
                    Bélier Le Bélier est un signe de feu et est facilement
                    attiré par les couleurs vives. Les personnes nées sous les
                    signes du feu ont une personnalité distinctive et sont
                    pleines d’énergie, caractérisées par l’enthousiasme et
                    l’insouciance.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Taureau Symbole d’amour pour la nature et les grands
                    espaces, il fallait lui consacrer le vert. Pour la richesse
                    végétale et le caractère terreux, c’est la couleur la mieux
                    adaptée à ce signe de terre.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Gémeaux Les Gémeaux n’aiment généralement pas le noir ou le
                    blanc, mais aiment un heureux mélange des deux ! Les Gémeaux
                    sont le signe de la dualité et des moitiés, préférant le
                    gris. Les signes aériens les associent implicitement au
                    gris, comme le ciel et les nuages.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Cancer Les natifs de ce signe sont intelligents et émotifs.
                    Ce signe très doux est associé à la couleur blanche. La
                    pureté et le calme sont véritablement associés à cette
                    couleur.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Lion Puisque le lion est le roi de la jungle et possède une
                    belle fourrure jaune, cette couleur lui va à merveille.
                    Faisant référence au soleil qui fait briller le lion, la
                    couleur jaune s’accorde parfaitement avec ce signe qui adore
                    rouler des yeux.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Vierge Personnalité rêveuse, sensuelle et intuitive : voilà
                    ce qui décrit les personnes Vierge. En raison de l’espoir et
                    de la tendresse qu’ils représentent, le vert est la couleur
                    parfaite pour ce signe de terre.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Balance Les Balances sont des personnes équilibrées et
                    préfèrent les couleurs équilibrées entre deux tons. Nous
                    avons choisi le saumon, car il n’était ni orange ni rose,
                    c’était la combinaison parfaite des deux !
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Scorpion Quoi de mieux que du noir pour ce mystérieux signe
                    astro !
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Sagittaire Saviez-vous que la couleur violette est associée
                    à la spiritualité ? Bien que surprenant, le violet est plus
                    facile à assortir à de nombreux styles que vous ne le
                    pensez.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Capricorne En tant que signe de terre, on associe la couleur
                    terre cuite aux troncs d’arbres, à la capacité rassurante du
                    Capricorne et à un pilier de force parmi ses pairs.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Verseau Avec une imagination sans limites et la tête dans le
                    ciel et les nuages, le bleu foncé est la couleur parfaite
                    pour ce signe maussade.
                  </span>
                </li>
                <li className="blog1-li">
                  <span className="blog1-span">
                    Poisson C’est le signe d’eau par excellence, il faut donc
                    l’associer au bleu clair et à la mer.
                  </span>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ViewBlog1;
