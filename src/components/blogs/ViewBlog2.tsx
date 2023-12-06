import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewBlog2 = () => {
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
            Quel est le signe astrologique le plus timide ?
          </h2>
          <CardBody>
            <p className="blog-para">
              Les individus nés sous le signe du Cancer sont généralement perçus
              comme les plus timides du zodiaque. Voici les raisons pour
              lesquelles ils sont souvent associés à la timidité :
            </p>
            <ul className="blog-ul">
              <li className="blog-li">
                <span className="blog-span">
                  Sensibilité accrue : Les Cancers sont dotés d’une sensibilité
                  profonde qui les rend plus enclins à se sentir submergés dans
                  des situations sociales.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Prudence naturelle : Les Cancers ont tendance à être prudents
                  et à réfléchir avant d’agir, ce qui peut se traduire par une
                  approche réservée dans les interactions sociales.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Attachement familial : Ils ont un lien fort avec leur famille,
                  ce qui peut les rendre plus réticents à sortir de leur
                  coquille et à s’ouvrir aux étrangers.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Émotions intenses : Les Cancers vivent leurs émotions de
                  manière intense, ce qui peut les rendre plus susceptibles de
                  ressentir de l’anxiété sociale.
                </span>
              </li>
              <li className="blog-li">
                <span className="blog-span">
                  Besoin de sécurité : La sécurité et le confort sont essentiels
                  pour les Cancers, ce qui peut les amener à éviter les
                  situations nouvelles et inconnues.
                </span>
              </li>
            </ul>
            <h6 className="blog-title2-3">
              *Notre classement des signes astrologiques les plus timides
            </h6>
            <p className="blog-para">
              Que ce soit lors d’une présentation lors d’un événement
              professionnel ou devant quelqu’un que vous aimez, la timidité peut
              se manifester de différentes manières. La science estime que
              l’origine de ce trait a plus à voir avec l’environnement et
              l’éducation qu’avec la génétique. Ce qui est encore plus
              surprenant, c’est que si les gènes ne jouent pas vraiment de rôle
              dans le développement de la timidité d’une personne, la naissance,
              en revanche, y est pour beaucoup. En effet, selon la position des
              étoiles à la naissance, votre signe du zodiaque peut faire de vous
              une personne timide… ou pas. Découvrez où se classent les signes
              les plus timides du zodiaque.
            </p>
            <div>
              <ul className="blog-ul">
                <li className="blog-li">
                  <span className="blog-span">
                    Poisson Ce signe ne ressemble certainement pas à un canard à
                    l’eau lorsqu’il s’agit d’apparitions publiques ou de
                    présence de gens. En fait, les Poissons sont des gens qui
                    aiment ne pas se faire remarquer. Ils sont prudents et
                    n’aiment pas la confrontation avec le monde extérieur.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Taureau Les personnes Taureau n’aiment naturellement pas que
                    les yeux des autres soient fixés sur eux. Ils apprécient
                    leur anonymat et se sentent bien lorsqu’ils restent dans
                    leur propre monde. Les Taureaux sont des rêveurs qui aiment
                    souvent réfléchir à des questions existentielles et
                    préfèrent profiter du luxe de ne pas se faire remarquer.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Cancer Les Cancers sont connus pour être très timides. Leur
                    personnalité particulière est principalement liée à leur
                    extrême manque de confiance en eux. Pour la plupart des
                    Cancers, prendre la parole devant un public ou être sous les
                    projecteurs est une véritable épreuve. Les Cancers se
                    soucient beaucoup de ce que les gens pensent d’eux.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Verseau Les Verseaux ont besoin de se sentir en sécurité
                    pour être complètement à l’aise. De ce fait, ils aiment
                    s’épanouir dans un entourage proche, ce qui leur garantit la
                    tranquillité. Une fois qu’ils se retrouveront avec des
                    inconnus, les Verseaux se perdront.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Scorpion Les Scorpions sont naturellement amicaux avec ceux
                    qui les entourent, mais puissants envers leurs adversaires.
                    C’est pour ces raisons que le Scorpion figure en bonne place
                    sur la liste des signes les plus détestés du zodiaque.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Balance Si les Balances sont considérées comme le meilleur
                    des signes du zodiaque, c’est principalement parce qu’elles
                    évitent les conflits comme la peste. De plus, les personnes
                    de ce signe ont tendance à être modestes en groupe et
                    préfèrent faire valoir les opinions des autres.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Vierge Les Vierges sont des personnes qui aiment garder le
                    contrôle. En l’occurrence, ils n’aiment pas les surprises.
                    Les personnes nées sous ce signe ne se sentiront à l’aise et
                    détendues que dans un environnement qui leur est familier.
                  </span>
                </li>
                <li className="blog-li">
                  <span className="blog-span">
                    Sagittaire En règle générale, le Sagittaire souffre de
                    nombreuses insécurités. De plus, cela explique pourquoi ils
                    regardent souvent derrière eux et se méfient de ceux qui les
                    entourent. De surcroît, le Sagittaire a toujours
                    l’impression qu’il n’agit pas de la manière la plus
                    appropriée.
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
export default ViewBlog2;
