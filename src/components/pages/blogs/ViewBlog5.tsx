import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Viewblog5 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <FontAwesomeIcon
        className="blog-icon-retour"
        icon={faCircleLeft}
        beat
        size="2xl"
        onClick={() => navigate(-1)}
      />
      <Card className="blog-card">
        <h2 className="blog-title">
          Numérologie du couple, comment ça fonctionne ?
        </h2>
        <CardBody>
          <p className="blog-para">
            Vous voulez savoir si vous êtes compatible avec votre partenaire et
            où peut vous mener votre relation sur le long terme ? Avec la
            numérologie de couple, vous pouvez rapidement en apprendre plus sur
            votre compatibilité amoureuse astrologique ou numérologique.
            Compatibilité des prénoms, dates de naissance, ... La vie peut
            parfois prendre des allures de conte de fée mais les chiffres eux,
            ne mentent pas.
          </p>
          <h6 className="blog-title2-3">*Qu'est-ce que la numérologie ?</h6>
          <p className="blog-para">
            La numérologie regroupe un ensemble de pratiques et de croyances qui
            se basent sur l'étude des nombres et des chiffres. En transformant
            les lettres d'un prénom ou une date de naissance en un nombre bien
            particulier, on peut ainsi en apprendre plus sur une personne, une
            compatibilité amoureuse, une destinée, ... Dans le même esprit que
            l'astrologie, la numérologie n'est pas une pratique de voyance à
            proprement parler. Elle permet aux personnes qui la pratique de
            mieux se connaître, mieux se comprendre et de mieux vivre avec les
            autres. Une opportunité d'être plus heureux, plus épanouie et
            d'aborder la vie différemment.
          </p>
          <h6 className="blog-title2-3">*Numérologie des prénoms du couple</h6>
          <p className="blog-para">
            En couple, il n'est pas toujours évident de savoir si la relation
            est faite pour durer. Avec la numérologie de couple, vous pouvez
            étudier la compatibilité des prénoms, pour savoir si les bases sur
            lesquelles reposent votre histoire sont solides et quels sont les
            éventuels points de vigilance à observer.
          </p>
          <h6 className="blog-title2-3">
            *Calculer son chiffre de compatibilité numérologique des prénoms
          </h6>
          <p className="blog-para">
            <span className="blog-span">
              Pour pouvoir connaître votre compatibilité amoureuse grâce à la
              numérologie de couple, vous devez trouver votre nombre de couple.
              Voici comment faire :
            </span>
            <br />
            <span className="blog-span">
              1°-Transformez d'abord les lettres de votre prénom et de celui de
              votre partenaire en chiffre. Pour cela, suivez le tableau suivant
              :
            </span>
          </p>
          <ul className="blog-ul">
            <li className="blog-li">
              <span className="blog-span">A/J/S = 1</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">B/K/T = 2</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">C/L/U = 3</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">D/M/V = 4</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">E/N/W = 5</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">F/O/X = 6</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">G/P/Y = 7</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">H/Q/Z = 8</span>
            </li>
            <li className="blog-li">
              <span className="blog-span">I/R = 9</span>
            </li>
          </ul>
          <p className="blog-para">
            <span className="blog-span">
              2°-Additionnez les chiffres de chaque prénom pour trouver un
              nombre. Puis additionner chaque chiffre du nombre pour trouver un
              chiffre.
            </span>
            <br />
            <span className="blog-span">
              3°-Vous avez alors 1 chiffre par prénom que vous pouvez
              additionner ensemble. Cela vous donne votre numéro de couple.
            </span>
          </p>
          <h6 className="blog-title2-3">*La signification des résultats</h6>
          <p className="blog-para">
            <span className="blog-span">
              Une fois votre numérologie de couple faite, vous devez analyser
              les résultats. Chaque chiffre correspond à une indication
              particulière de compatibilité amoureuse :
            </span>
          </p>
          <ul className="blog-ul">
            <li className="blog-li">
              <span className="blog-span">
                1 : une rencontre coup de foudre très intense et pleine d'amour.
                Attention toutefois à ne pas brûler les étapes pour tenir dans
                la durée.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                2 : le chiffre du couple par excellence. Compatibilité, bonheur
                et durabilité sont au programme.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                3 : complicité et aventures au programme. Attention à ne pas
                oublier l'intimité et la tendresse, pour ne pas tomber dans une
                relation amicale.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                4 : des difficultés d'équilibre sont à prévoir, vous allez
                devoir vous apprivoiser pour espérer durer dans le temps.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                5 : une passion parfois dévastatrice avec une attirance qui ne
                fait aucun doute. Les montagnes russes ne sont pas de tout
                repos.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                6 : une relation équilibrée et harmonieuse qui devrait vous
                permettre de vous épanouir sur la durée.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                7 : la relation va nécessiter du temps pour se créer et
                s'installer mais tout vient à point à qui sait attendre.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                8 : une relation passionnelle et émotionnelle qui n'apprécie pas
                la routine et a besoin que les choses bougent.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                9 : une relation conflictuelle, néanmois ils sont tolérants et
                feront des efforts pour s'accepter car en fait ils ne
                s'ennuieront jamais ensemble.
              </span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};
export default Viewblog5;
