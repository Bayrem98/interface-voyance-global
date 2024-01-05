import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const ViewBlog3 = () => {
  const navigate = useNavigate();

  return (
    <>
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
            Quel est le signe astrologique le plus beaux ?
          </h2>
          <CardBody>
            <p className="blog-para">
              Les critères de beauté varient d’une personne à l’autre, mais en
              astro, certains signes sont souvent associés à des traits de
              personnalité qui les rendent particulièrement attrayants. Les
              personnes nées sous le signe astrologique du Poissons sont souvent
              décrites comme étant empathiques, sensibles et créatives. Voici
              pourquoi elles sont considérées comme parmi les plus belles âmes
              du zodiaque :
            </p>
            <ul className="blog-ul">
              <li className="blog-li">
                <span className="blog-span">
                  Empathie : Les Poissons sont souvent très empathiques et
                  peuvent facilement ressentir les émotions des autres. Cette
                  capacité à se connecter profondément avec les sentiments des
                  autres les rend charmants et attentionnés.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Intuition : Les Poissons ont tendance à avoir une forte
                  intuition et à suivre leur instinct. Cette sensibilité
                  intuitive les aide à comprendre les besoins et les désirs des
                  personnes qui les entourent, ce qui les rend encore plus
                  attrayants.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Compassion : Les Poissons sont souvent très compatissants et
                  préoccupés par le bien-être des autres. Leur capacité à se
                  mettre à la place des autres et à offrir un soutien émotionnel
                  les rend admirables.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Créativité : Les Poissons ont souvent une forte imagination et
                  sont souvent très créatifs dans leur vie professionnelle et
                  personnelle. Leur créativité se reflète non seulement dans
                  leur apparence, mais aussi dans leur manière d’aborder la vie.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Altruisme : Les Poissons ont tendance à être très généreux et
                  à se soucier des autres, même s’ils peuvent parfois avoir des
                  difficultés à mettre leurs propres besoins en avant. Leur
                  altruisme et leur désir d’aider les autres les rendent
                  authentiquement beaux.
                </span>
              </li>
            </ul>
            <h6 className="blog-title2-3">
              *Notre classement des signes les plus beaux du Zodiaque
            </h6>
            <p className="blog-para">
              Certains signes astrologiques peuvent être associés à des
              caractéristiques qui les rendent particulièrement attrayants.
              Voici notre classement des signes considérés comme les plus beaux
              du zodiaque :
            </p>
            <ul className="blog-ul">
              <li className="blog-li">
                <span className="blog-span">
                  Poissons Commençons par les Poissons: ce qu’on aime chez eux,
                  c’est leur côté rêveur et leur sensibilité qui nous donne
                  envie de les dorloter. On se sent très à l’aise avec eux et
                  leur innocence peut attirer de nombreuses personnes. Leur
                  beauté angélique et leur simplicité mettent tout le monde
                  d’accord ! Tout simplement, on se sent bien avec eux.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Lion Le Lion est l’un des signes les plus magnétiques. Leur
                  apparence fait partie de leur plus grande force, et bien
                  souvent, ils nous laissent sans voix. De plus, les Lions sont
                  d’excellents compagnons.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Balance Les personnes nées sous le signe de la Balance sont
                  délicates, ont des traits du visage exquis et possèdent un
                  charme naturel sans nécessiter de mise en beauté excessive.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Sagittaire L’énergie contagieuse et la spontanéité du
                  Sagittaire attirent tout le monde autour de lui. La routine et
                  la monotonie ne font pas partie de leur quotidien et ce trait
                  de personnalité peut être très enrichissant. Leur personnalité
                  se reflète dans leurs traits physiques, ce qui les rend beaux
                  et attirants, mais toujours de manière atypique !
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Gémeaux Pour les Gémeaux, leur personnalité pétillante se
                  reflète souvent dans leurs yeux. Ils peuvent avoir des traits
                  raffinés et sophistiqués combinés à un tempérament énergique
                  et des relations sociales faciles. Une combinaison gagnante
                  qui plaira à plusieurs personnes.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Vierge Les Vierges peuvent sembler froides, mais derrière
                  cette carapace se cache un visage doux. Ils possèdent
                  également un physique et un charme attrayant !
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Scorpion Ce signe aime vivre la vie intensément, et on le voit
                  dans ses yeux. Dans tous les sens du terme, son physique vous
                  fera perdre vos moyens.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Taureau Le Taureau est connu comme le signe le plus gourmand
                  parmi les douze signes. La raison pour laquelle il est capable
                  de s’adoucir est due à son physique harmonieux. On peut même y
                  trouver un côté un peu sentimental.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Bélier Le Bélier est une personne agressive, parfois brutale,
                  qui fait peur par son excès d’énergie et son tempérament
                  agressif perçu, qui se reflète dans son physique
                  impressionnant ou robuste.
                </span>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ViewBlog3;
