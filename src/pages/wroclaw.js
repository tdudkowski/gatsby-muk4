import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const WroclawPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="O Wrocławiu" />
      <h2>O Wrocławiu</h2>

      <p>
        Wrocław – czwarte pod względem liczby ludności (około 634 tysiące mieszkańców) i piąte pod względem powierzchni (blisko 293 kilometry kwadratowe) miasto Polski, historyczna stolica Śląska i obecna stolica Dolnego Śląska. Gospodarz Mistrzostw Europy w Piłce Nożnej Euro 2012, Europejska Stolica Kultury i Światowa Stolica Książki 2016, gospodarz The World Games 2017, European Best Destination  2018 (czyli najlepszy cel podróży), Miasto Literatury UNESCO 2019.</p>

      <p>Wrocław może poszczycić się ponadtysiącletnią historią. Nazwa miasta pochodzi od imienia czeskiego księcia Wrocisława (łac. Vratislav), założyciela grodu nad Odrą. Gród ten został około 985 roku zdobyty przez Mieszka I, twórcę państwa polskiego. W roku 1000 założono tu jedno z trzech polskich biskupstw (dwa pozostałe to krakowskie i kołobrzeskie). W kolejnych stuleciach Wrocław należał do Czech, Austrii, Prus, Niemiec, a po drugiej wojnie światowej, podczas której zniszczeniu uległo około siedemdziesięciu procent zabudowy miasta, znalazł się ponownie w granicach państwa polskiego.</p>

      <p>
        Od początku mieszkały tutaj różne narody, rozbrzmiewały różne języki, mieszały się kultury i religie, co pozytywnie wpłynęło na współczesny charakter Wrocławia. Nie ma drugiego takiego miasta w Polsce, w którym atmosfera „mikrokosmosu Europy” byłaby bardziej wyczuwalna.</p>

      <p>
        Wśród licznych atrakcji turystycznych uwagę zwraca pieczołowicie odrestaurowany Rynek z późnogotyckim ratuszem, urokliwy Ostrów Tumski, będący historycznym zaczątkiem miasta, położona na jego terenie średniowieczna katedra oraz inne kościoły. Warto też zobaczyć liczne muzea, w tym Panoramę Racławicką, malowniczy park Szczytnicki z modernistycznym osiedlem WuWA, położoną nieopodal Halę Stulecia, a także znany w całej Polsce ogród zoologiczny. Zapraszamy do Wrocławia!</p>

      <p>
        Dlaczego warto do nas przyjechać? Oto wybrane wrocławskie atrakcje, czyli unikatowe miejsca, obiekty i zjawiska:</p>

      <ul className="wro_list">
        <li><GatsbyImage image={getImage(data.mostek.childImageSharp.gatsbyImageData)} alt="mosty" /> <section>Liczne mosty, których dokładnej liczby nie zna nikt. Największy to most Rędziński, będący częścią Autostradowej Obwodnicy Wrocławia, a najwyżej położony na Starym Mieście to legendarny „mostek pokutnic”, który łączy wieże kościoła pw. św. Marii Magdaleny. Według legendy co noc czyszczą go dusze lekkomyślnych dziewcząt, które nie chciały się podjąć obowiązków domowych.</section></li>
        <li><GatsbyImage image={getImage(data.krasnal.childImageSharp.gatsbyImageData)} alt="krasnale" /> <section>Szczególnie upodobały sobie Wrocław krasnale. Pojawiały się początkowo w miejscu zamalowywanych przez reżim wolnościowych i antyrządowych haseł (lata osiemdziesiąte, działalność Pomarańczowej Alternatywy). Dzisiaj figurki krasnali opanowały całe miasto.</section></li>
        <li><GatsbyImage image={getImage(data.tramwaj.childImageSharp.gatsbyImageData)} alt="tramwaje" /><section>Charakterystyczne niebieskie tramwaje, które zasłynęły dzięki „Wrocławskiej piosence” śpiewanej przez Marię Koterbską: „Mkną po szynach niebieskie tramwaje przez wrocławskich ulic sto. Tu przechodnia uśmiechem witają dzieci, kwiaty i każdy dom…”</section></li>
        <li><GatsbyImage image={getImage(data.opera.childImageSharp.gatsbyImageData)} alt="Opera Wrocławska" /> <section>Opera Wrocławska i organizowane przez nią i poza jej siedzibą gigantyczne superprodukcje operowe. Te nietypowe spotkania z operą określono „wrocławskim fenomenem”, jest to bowiem zjawisko niespotykane na tak dużą skalę w innych miastach Polski.</section></li>
        <li><GatsbyImage image={getImage(data.nfm.childImageSharp.gatsbyImageData)} alt="Narodowe Forum Muzyki" /><section>Narodowe Forum Muzyki im. Witolda Lutosławskiego – na taki obiekt miasto czekało ponad siedemdziesiąt lat! Niepowtarzalna architektura, rewelacyjna akustyka i jedne z najlepszych na świecie organów filmy Klais z Bonn. Do Narodowego Forum Muzyki przychodzi się z przyjemnością nie tylko na koncerty, ale i zwiedzanie obiektu.</section></li>
        <li><GatsbyImage image={getImage(data.wenecja.childImageSharp.gatsbyImageData)} alt="rejs Odrą" /><section>Niepowtarzalna atmosfera „Wenecji Północy”. Taką nazwę otrzymał Wrocław ze względu na swoje położenie nad pięcioma głównymi rzekami: Odrą, Bystrzycą, Oławą, Ślęzą i Widawą oraz mniejszymi rzekami i ciekami wodnymi oraz dzięki licznym wyspom i mostom. Wrocław można zwiedzać z perspektywy rzeki: statkiem, łodzią czy kajakiem – dla każdego coś miłego!</section></li>
        <li><GatsbyImage image={getImage(data.noc.childImageSharp.gatsbyImageData)} alt="Wrocław nocą" /><section>Wrocław nigdy nie zasypia. To miasto ludzi młodych. Na wrocławskich uniwersytetach i uczelniach wyższych studiuje około stu czterdziestu tysięcy studentów z Polski i z zagranicy.</section></li>
        <li><GatsbyImage image={getImage(data.ratusz.childImageSharp.gatsbyImageData)} alt="Ratusz" /><section>Ratusz wrocławski budowany przez ponad 250 lat (od końca XIII do początku XVI wieku) ocalał podczas drugiej wojny światowej i stanowi obecnie jeden z najpiękniejszych przykładów gotycko-renesansowej architektury mieszczańskiej w Europie. Południowa fasada ratusza to swoista chronika miasta: znajdziemy tam sceny z życia mieszkańców oraz elementy z bajek Ezopa.</section></li>
        <li><GatsbyImage image={getImage(data.get.childImageSharp.gatsbyImageData)} alt="Kamienica pod Murzynem" /><section>Jedyny na świecie „pomnik przepukliny pępkowej” autorstwa Stanisława Wysockiego, do którego pozował inny znany wrocławski artysta – Eugeniusz Get-Stankiewicz. Figura Masaja była tak wierną kopią modela, że na jej podstawie zdiagnozowano u artysty przepuklinę pępkową i przeprowadzono operację.</section></li>
        <li><GatsbyImage image={getImage(data.fredro.childImageSharp.gatsbyImageData)} alt="Lwów we Wrocławiu" /><section>„Lwów we Wrocławiu” – po drugiej wojnie światowej do Wrocławia przyjechała liczna grupa lwowiaków, która miała olbrzymi wpływ na kształtowanie życia społecznego i kulturalnego miasta. We Wrocławiu można spotkać hrabiego Aleksandra Fredrę, zwiedzić Muzeum Pana Tadeusza, zajrzeć na dziedziniec Ossolineum, obejrzeć makietę dawnego Lwowa czy też Panoramę Racławicką.</section></li>
        <li><GatsbyImage image={getImage(data.hala.childImageSharp.gatsbyImageData)} alt="Hala Stulecia" /><section>Hala Stulecia to jedyny obiekt wrocławski na liście światowego dziedzictwa UNESCO. Podczas ściągania szalunków hali w 1913 roku architekt Max Berg musiał uciec się do sprytnego wybiegu. Ponieważ żaden z jego robotników nie chciał ryzykować utraty życia, ten przekupił przypadkowego przechodnia i z nim rozpoczął prace przy szalunkach, udowadniając tym samym, że jest to trwała konstrukcja.</section></li>
        <li><GatsbyImage image={getImage(data.film.childImageSharp.gatsbyImageData)} alt="Wytwórnia Filmów Fabularnych" /><section>Jedno z największych w Polsce nagromadzenie plenerów filmowych. Od 1954 roku funkcjonowała tutaj Wytwórnia Filmów Fabularnych, w której swoje debiutanckie albo najbardziej znane filmy nakręcili m.in. Andrzej Wajda, Roman Polański, Stanisław Lenartowicz, Sylwester Chęciński, Roman Załuski, Janusz Zaorski, Radosław Piwowarski, Wiesław Saniewski czy Waldemar Krzystek. Obecnie tradycje wrocławskiej wytwórni kontynuuje Centrum Technologii Audiowizualnych. Wrocław wciąż przyciąga filmowców!</section></li>
        <li><GatsbyImage image={getImage(data.latarnik.childImageSharp.gatsbyImageData)} alt="Latarnik na Ostrowiu Tumskim" /><section>Wrocław jako jedyne miasto w Polsce posiada swojego latarnika, który każdego dnia na godzinę przed zachodem słońca ręcznie zapala latarnie gazowe. Można spotkać go w najstarszej części miasta – na Ostrowie Tumskim. Zachwyt turystów wzbudzają liczne gotyckie kościoły zgromadzone na dawnej wyspie oraz wieczorna, magiczna atmosfera tego miejsca.</section></li>
        <li><GatsbyImage image={getImage(data.panorama.childImageSharp.gatsbyImageData)} alt="Panorama Racławicka" /><section>Panorama Racławicka – olbrzymie malowidło przedstawiające zwycięską bitwę powstańców polskich z wojskami carskimi z 1794 r. Realistyczny sztafaż otaczający płótno ze wszystkich stron sprawia, że czujemy się sami uczestnikami zrywu niepodległościowego sprzed ponad 200 lat. Tworzywo imitujące ziemię to pianobeton wynaleziony przez profesorów Politechniki Wrocławskiej.</section></li>
        <li><GatsbyImage image={getImage(data.powodzianka.childImageSharp.gatsbyImageData)} alt="Powodzianka" /><section>Prawie trzymetrowa rzeźba „Powodzianki”, stojąca na Moście Uniwersyteckim, dedykowana jest ludziom walczącym z powodzią tysiąclecia w 1997 r. Książki trzymane na ramieniu symbolizują ratowane dobra: nie tylko duchowe, ale i materialne. Autorem rzeźby jest Stanisław Wysocki.</section></li>
        <li><GatsbyImage image={getImage(data.fontanna.childImageSharp.gatsbyImageData)} alt="Fontanna" /><section>Multimedialna fontanna zlokalizowana w malowniczym parku Szczytnickim przy Hali Stulecia. Powstała ona w 2009 roku z okazji dwudziestej rocznicy pierwszych wolnych wyborów w powojennej Polsce. Działa od maja do końca października (pokazy z muzyką odbywają się co godzinę), natomiast wieczorami podczas weekendów wyświetlane są tam specjalne wizualizacje z towarzyszeniem muzyki, obrazów i efektów laserowych.</section></li>
        <li><GatsbyImage image={getImage(data.jatki.childImageSharp.gatsbyImageData)} alt="Stare Jatki" /><section>Jedyny w Polsce pomnik poświęcony zwierzętom rzeźnym. Stoi na Starych Jatkach, miejscu, w którym w średniowieczu handlowano mięsem. Według tradycji każdy „konsument-mięsożerca” musi w tym miejscu podziękować zwierzętom i trochę je pogłaskać.</section></li>
        <li><GatsbyImage image={getImage(data.przyrodnicze.childImageSharp.gatsbyImageData)} alt="Muzeum Przyrodnicze" /><section>Muzeum Przyrodnicze, gdzie zobaczymy m.in. jedyny w Polsce kompletny szkielet płetwala błękitnego, największego zwierzęcia, jakie kiedykolwiek żyło na Ziemi. Dorosły osobnik osiągał 30 m długości i 112 t wagi. Wrocławski dwuletni „maluszek” mierzy 14,6 m długości.</section></li>
      </ul>

      <p>
        To tylko niektóre z powodów, dla których warto przyjechać do Wrocławia. Przyjedź i się przekonaj!</p>

    </Layout>
  )
}

export default WroclawPage

export const pageQuery = graphql`
  query {
    fontanna: file(relativePath: { eq: "wro/fontanna_z.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    get: file(relativePath: { eq: "wro/get1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    hala: file(relativePath: { eq: "wro/hala_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    jatki: file(relativePath: { eq: "wro/jatki_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    krasnal: file(relativePath: { eq: "wro/krasnal1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mostek: file(relativePath: { eq: "wro/mostek_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    noc: file(relativePath: { eq: "wro/noc_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    opera: file(relativePath: { eq: "wro/opera_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    panorama: file(relativePath: { eq: "wro/panorama_2.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    fredro: file(relativePath: { eq: "wro/fredro.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
        powodzianka: file(relativePath: { eq: "wro/powodzianka_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    przyrodnicze: file(relativePath: { eq: "wro/przyrodnicze_z.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    ratusz: file(relativePath: { eq: "wro/ratusz_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tramwaj: file(relativePath: { eq: "wro/tram_3.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
       wenecja: file(relativePath: { eq: "wro/wenecja_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    nfm: file(relativePath: { eq: "wro/nfm_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    film: file(relativePath: { eq: "wro/film_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
   latarnik: file(relativePath: { eq: "wro/latarnik_1.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }`
