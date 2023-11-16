import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ViewBlog2 = () => {
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
            Quel est le signe astrologique le plus timide ?
          </h2>
          <CardBody>
            <p style={{ textAlign: "justify" }}>
              Les individus nés sous le signe du Cancer sont généralement perçus
              comme les plus timides du zodiaque. Voici les raisons pour
              lesquelles ils sont souvent associés à la timidité :
              <ul>
                <li>
                  Sensibilité accrue : Les Cancers sont dotés d’une sensibilité
                  profonde qui les rend plus enclins à se sentir submergés dans
                  des situations sociales.
                </li>
                <li>
                  Prudence naturelle : Les Cancers ont tendance à être prudents
                  et à réfléchir avant d’agir, ce qui peut se traduire par une
                  approche réservée dans les interactions sociales.
                </li>
                <li>
                  Attachement familial : Ils ont un lien fort avec leur famille,
                  ce qui peut les rendre plus réticents à sortir de leur
                  coquille et à s’ouvrir aux étrangers.
                </li>
                <li>
                  Émotions intenses : Les Cancers vivent leurs émotions de
                  manière intense, ce qui peut les rendre plus susceptibles de
                  ressentir de l’anxiété sociale.
                </li>
                <li>
                  Besoin de sécurité : La sécurité et le confort sont essentiels
                  pour les Cancers, ce qui peut les amener à éviter les
                  situations nouvelles et inconnues.
                </li>
              </ul>
            </p>
            <h6>*Notre classement des signes astrologiques les plus timides</h6>
            <p>
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
            <p style={{ textAlign: "justify" }}>
              <ul>
                <li>
                  Poisson Ce signe ne ressemble certainement pas à un canard à
                  l’eau lorsqu’il s’agit d’apparitions publiques ou de présence
                  de gens. En fait, les Poissons sont des gens qui aiment ne pas
                  se faire remarquer. Ils sont prudents et n’aiment pas la
                  confrontation avec le monde extérieur.
                </li>
                <li>
                  Taureau Les personnes Taureau n’aiment naturellement pas que
                  les yeux des autres soient fixés sur eux. Ils apprécient leur
                  anonymat et se sentent bien lorsqu’ils restent dans leur
                  propre monde. Les Taureaux sont des rêveurs qui aiment souvent
                  réfléchir à des questions existentielles et préfèrent profiter
                  du luxe de ne pas se faire remarquer.
                </li>
                <li>
                  Cancer Les Cancers sont connus pour être très timides. Leur
                  personnalité particulière est principalement liée à leur
                  extrême manque de confiance en eux. Pour la plupart des
                  Cancers, prendre la parole devant un public ou être sous les
                  projecteurs est une véritable épreuve. Les Cancers se soucient
                  beaucoup de ce que les gens pensent d’eux.
                </li>
                <li>
                  Verseau Les Verseaux ont besoin de se sentir en sécurité pour
                  être complètement à l’aise. De ce fait, ils aiment s’épanouir
                  dans un entourage proche, ce qui leur garantit la
                  tranquillité. Une fois qu’ils se retrouveront avec des
                  inconnus, les Verseaux se perdront.
                </li>
                <li>
                  Scorpion Les Scorpions sont naturellement amicaux avec ceux
                  qui les entourent, mais puissants envers leurs adversaires.
                  C’est pour ces raisons que le Scorpion figure en bonne place
                  sur la liste des signes les plus détestés du zodiaque.
                </li>
                <li>
                  Balance Si les Balances sont considérées comme le meilleur des
                  signes du zodiaque, c’est principalement parce qu’elles
                  évitent les conflits comme la peste. De plus, les personnes de
                  ce signe ont tendance à être modestes en groupe et préfèrent
                  faire valoir les opinions des autres.
                </li>
                <li>
                  Vierge Les Vierges sont des personnes qui aiment garder le
                  contrôle. En l’occurrence, ils n’aiment pas les surprises. Les
                  personnes nées sous ce signe ne se sentiront à l’aise et
                  détendues que dans un environnement qui leur est familier.
                </li>
                <li>
                  Sagittaire En règle générale, le Sagittaire souffre de
                  nombreuses insécurités. De plus, cela explique pourquoi ils
                  regardent souvent derrière eux et se méfient de ceux qui les
                  entourent. De surcroît, le Sagittaire a toujours l’impression
                  qu’il n’agit pas de la manière la plus appropriée.
                </li>
              </ul>
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default ViewBlog2;
