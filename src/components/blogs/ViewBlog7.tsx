import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Viewblog7 = () => {
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
          La numérologie : calculez votre chemin de vie
        </h2>
        <CardBody>
          <p className="blog-para">
            Le chemin de vie en numérologie est un concept qui utilise les
            chiffres de la date de naissance pour identifier les tendances et
            les leçons de vie d'une personne. Chaque chiffre du chemin de vie
            est associé à des caractéristiques et des défis particuliers, qui
            peuvent fournir des informations sur la personnalité, les relations,
            la carrière, la spiritualité et d'autres aspects de la vie d'une
            personne. Le chemin de vie c'est le nombre le plus important dans la
            numérologie, c'est la base qui détermine l'influence dominante de
            notre existence, nos caractéristiques majeures mais surtout notre
            construction personnelle. Comme son nom l'indique c'est le chiffre
            qui ne changera jamais car il nous accompagne durant toute notre
            vie. Le chemin de vie nous relève notre caractère, nos aptitudes
            mais surtout il nous informe essentiellement des obstacles qui nous
            attendent pendant notre vie et les moyens pour les vaincre ou de les
            contourner. Non seulement le chemin de vie dévoile les obstacles
            extérieurs mais surtout les obstacles intérieurs qui sont liés
            directement à notre personnalité et notre façon de voir les choses.
            La façon dont vous vous agissez et les choix que vous prendrez et
            assumez feront que votre vie sera heureuse ou triste, positive ou
            négative. Il arrive que deux personnes soient nées le même jour, la
            même année et pratiquement la même heure à la naissance mais une
            pourra réussir sa vie et l'autre a un parcours assez difficile. Mais
            pourquoi ? Car la numérologie nous donne le choix et laisse une part
            entière à notre libre arbitre et à nos décisions. La première
            personne a pris les bonnes décisions au bon moment tant dis que pour
            la deuxième a fait des erreurs de choix. Rien est pour autant perdu
            quand on sait que chaque année il y a toujours des choix à faire et
            une chance à prendre pour retourner la situation. C'est ce que la
            numérologie nous apprend.
          </p>
          <h6 className="blog-title2-3">
            *Calculer son chemin de vie et le comprendre
          </h6>
          <p className="blog-para">
            Grâce à notre calculateur en ligne vous pourrez connaître votre
            chemin de vie et votre année personnelle en cours. Ces informations
            vous permettront de mieux vous connaître, de savoir si la période
            actuelle est propice à certains choix, à certaines décisions. Pour
            chaque année personnelle et chemin de vie nous vous offrons un
            diagnostic complet. Pour allez plus loin, être guidé et obtenir une
            étude personnalisée vous pourrez toujours consulter nos sélection de
            voyant et médiums.
          </p>
          <h6 className="blog-title2-3">
            *Chemin de vie rares : 11, 22, 33 ...
          </h6>
          <p className="blog-para">
            Dans de rares cas si votre chemin de vie donne un résultat comme 11,
            22 ou 33 on parle de maître nombre. Pour exemple Albert Einstein
            avait un chemin de vie en 33 mais ce n'est pas la seule personnalité
            ou célébrité chez qui l'on retrouve des chemins de vie en Maître
            nombre.
          </p>
          <h6 className="blog-title2-3">
            *Le chiffre clé ou chiffre de réalisation
          </h6>
          <p className="blog-para">
            Le chiffre clé ou le chiffre de la réalisation est la base de tous
            calculs dans la numérologie car ajouté à l'année universelle, il
            permet de déterminer votre année personnelle liée à votre date de
            naissance et de l'année en cours. Ce chiffre révèle aussi ce que
            vous êtes venu réaliser en priorité dans cette existence, votre
            mission de vie en quelque sorte. Il détermine le défi majeur auquel
            vous êtes confronté depuis votre naissance. Il représente notamment
            ce que vous pouvez devenir, ce chiffre est l'un des premiers défis
            que vous vous devez relever, il est donc important de le connaître.
          </p>
          <ul className="blog-ul">
            <li className="blog-li">
              <span className="blog-span">
                L'année universelle : L'Année universelle est la somme des
                chiffres de l'année en cours, elle est combinée au chiffre clé
                pour déterminer l'année personnelle.
              </span>
            </li>
            <li className="blog-li">
              <span className="blog-span">
                Le chemin de vie : Le chemin de vie est déterminé pour votre
                date de naissance comme l'est votre signe astrologique, il ne
                changera jamais. Il détermine l'influence dominante de votre moi
                profond. Il révèle votre personnalité, ses qualités et ses
                faiblesses.
              </span>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};
export default Viewblog7;
