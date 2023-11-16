import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Viewblog4 = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <FontAwesomeIcon
          icon={faCircleLeft}
          beat
          size="2xl"
          style={{
            color: "rgba(147, 147, 203, 0.866",
            cursor: "pointer",
            marginTop: 10,
            marginLeft: 10,
          }}
          onClick={() => navigate(-1)}
        />
        <Card
          style={{
            marginTop: 20,
            marginLeft: 50,
            marginRight: 50,
            marginBottom: 20,
          }}
        >
          <h2 style={{ textAlign: "center" }}>
            Quel est le signe astrologique le plus rare ?
          </h2>
          <CardBody>
            <p style={{ textAlign: "justify" }}>
              Si l’on se penche sur la rareté des signes astrologiques, le
              Verseau sort incontestablement du lot. Les natifs de ce signe sont
              une rareté parmi les constellations du zodiaque, ce qui fait du
              Verseau un signe astrologique intrigant et unique. Représenté par
              le porteur d’eau, le Verseau est connu pour sa pensée indépendante
              et son esprit novateur. De surcroît, sa vision du monde est
              souvent en avance sur son temps, ce qui le distingue des autres
              signes. En effet, les Verseaux sont des visionnaires, des
              humanitaires et des révolutionnaires. Ils sont passionnés par la
              recherche de solutions innovantes aux problèmes du monde.
            </p>
            <h6>*Notre classement des signes astrologiques les plus rares</h6>
            <p>
              Les anniversaires sont abondants à certaines périodes de l’année.
              Si vous y prêtez attention, vous le remarquerez sans doute, mais
              selon des recherches très sérieuses, portant sur les taux de
              natalité sur une période donnée. Selon les chiffres, on assiste à
              moins de naissances entre le 23-25 ​​décembre et le 31-3 janvier.
              À la lumière de ce constat, nous pouvons établir le classement des
              signes astrologiques les plus rares comme suit :
            </p>
            <ul>
              <li>
                Verseau Les Verseaux ont tendance à être des personnes qui
                vivent dans leur propre univers : ce sont, d’une manière
                générale, de grands rêveurs. Cependant, les Verseaux sont
                également très attentifs à son entourage. Ils possèdent une
                intelligence et des capacités de réflexion extraordinaires.
              </li>
              <li>
                Capricorne Le Capricorne possède absolument toutes les qualités
                qui font de lui une personne formidable. L’une des plus grandes
                qualités d’un Capricorne est qu’il est une personne digne de
                confiance. Nous pouvons tout leur confier, leur faire confiance,
                en faire nos confidents, et nous ne serons jamais déçus. De
                plus, c’est une qualité partagée par les deux autres signes
                terrestres, le Taureau et la Vierge.
              </li>
              <li>
                Sagittaire Évidemment, les signes du zodiaque les plus rares
                sont ceux qui ont accumulé le plus de qualités. À leur honneur,
                les Sagittaires sont souvent des personnes très empathiques,
                authentiques et généreuses. Ils ne comptent pas quand ils aiment
                et font preuve d’une intégrité et d’une honnêteté très
                évidentes.
              </li>
              <li>
                Bélier Les Béliers sont considérés comme impulsifs, courageux et
                presque imprudents. Ils sont intrépides et cherchent souvent à
                relever des défis de toutes sortes. Véritable signe de feu, le
                Bélier a un tempérament intense qu’il peut être difficile de le
                tempérer. De plus, le Bélier est également connu comme le signe
                le plus spirituel parmi les douze signes.
              </li>
              <li>
                Poisson Les Poissons sont des personnes extrêmement sensibles et
                très attentives aux émotions de leur entourage. C’est l’une des
                caractéristiques des signes d’eau, qui fait que les personnes
                ayant des signes d’eau sont considérées comme les plus faibles
                du zodiaque. En effet, elles ont tendance à être trop
                compréhensives.
              </li>
              <li>
                Taureau Toutes les personnes nées sous le signe du Taureau
                aiment l’action. Ils n’aiment donc pas les longs discours et
                préfèrent paraître pragmatiques. Il n’est donc pas surprenant
                qu’ils soient en tête de liste des signes les plus avares du
                zodiaque. En effet, le Taureau n’aime pas les surprises et aime
                tout planifier et gérer au mieux toutes les situations. Si vous
                avez un Taureau dans votre entourage, vous devriez probablement
                lui demander de l’aide pour économiser de l’argent. Ils sont
                connus pour être très fidèles que ce soit en amour ou en amitié.
              </li>
            </ul>
            <h6>*Quels sont les signes du zodiaque les plus courants ?</h6>
            <p>
              Il n’y a pas encore de réponse claire, mais selon plusieurs
              études, la date de naissance la plus courante est septembre, ce
              qui suggère un grand nombre de conceptions pendant les vacances.
              Nous pouvons en déduire que les signes les plus courants du
              Zodiaque sont les Vierges et les Balances.
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default Viewblog4;
