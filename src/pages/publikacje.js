import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/sub.css"
import Wroclaw1 from "../images/przew_wroclaw_cover.jpg"
import DlnSlask1 from "../images/malgorzata-dolnyslask1_small.jpg"
import Mock1 from "../images/malgorzata-mock1_small.jpg"
import Feniks1 from "../images/feniks_okladka.jpg"
import Kloss1 from "../images/kloss_okladka_small.jpg"
import WroOkolice1 from "../images/okolice_wroc_cover.jpg"

const PublikacjePage = ({ data }) => {

  return (
    <Layout>
      <Seo title="Publikacje" />
      <h2>Publikacje</h2>
      <section className="publikacje">
        <h3>„Przewodnik po Wrocławiu”</h3>
        <section>
          <p>
            Idealny dla wszystkich, którzy będąc we Wrocławiu na jeden, dwa lub trzy dni, chcą zobaczyć
            najpiękniejsze zakątki stolicy Dolnego Śląska.</p>
          <p>Tekst, pełen informacji i anegdot, oraz kolorowe zdjęcia
            i reprodukcje starych pocztówek ze zbiorów wydawnictwa oraz autorki pozwolą w sposób łatwy i
            przyjemny zapoznać się z najciekawszymi zabytkami Wrocławia.</p>

          <ul>
            <li>Autorzy: Małgorzata Urlich-Kornacka (tekst), Stanisław Klimek (fotografie)</li>
            <li>Wydawca: Via Nova 2006; wersja uaktualniona w roku 2019; liczba stron: 32</li>
            <li>Dostępne wersje językowe polska, angielska, niemiecka, rosyjska,
              włoska, francuska</li>
          </ul>

        </section>
        <section>
          <img src={Wroclaw1} alt="okładka" className="publikacjeIMG" />
        </section>
      </section>

      <section className="publikacje">
        <h3>„Na tropie zaginionego Breslau. Przewodnik na podstawie powieści Marka Krajewskiego”</h3>
        <section>
          <p>
            Propozycja dla miłośników powieści kryminalnych Marka Krajewskiego oraz zwolenników
            nieszablonowego zwiedzania Wrocławia. Na przygotowanej trasie znajdują się bowiem nie tylko
            najczęściej odwiedzane miejsca stolicy Dolnego Śląska, ale również malownicze, nieco zapomniane
            zakątki.</p>
          <p>W przewodniku szlakiem radcy kryminalnego wrocławskiej policji Eberharda Mocka nie
            zabraknie ciekawostek historycznych dotyczących odwiedzanych miejsc, cytatów z powieści,
            reprodukcji starych kartek pocztowych z kolekcji autorki oraz odwołań do wydarzeń z powieści Marka
            Krajewskiego. Dzięki temu poczujemy atmosferę przedwojennego Wrocławia, czyli zaginionego
            Breslau, które – obok Mocka – jest bez wątpienia głównym bohaterem powieści kryminalnych i
            niniejszej publikacji.
          </p>
          <ul>
            <li>Autor: Małgorzata Urlich-Kornacka</li>
            <li>Wydawca: Via Nova; liczba stron: 42</li>
            <li>Dostępne wersje językowe: polska, niemiecka</li>
          </ul>
        </section>
        <section>
          <img src={Mock1} alt="okładka" className="publikacjeIMG" />
          {/* <Img fixed={data.mock1.childImageSharp.fixed} /> */}
          {/* <Img fixed={data.mock2.childImageSharp.fixed} /> */}
        </section>
      </section>

      <section className="publikacje">
        <h3>„Śladami Klossa po Wrocławiu”</h3>
        <section>
          <p>
            W jakim lokalu porucznik von Vormann wypowiada hasło o kasztanach z placu Pigalle? Gdzie znajduje
            się willa profesora Porschatta? A sztab generała von Boldta? W jakiej kamienicy mieszkała Christin
            Kield? Jak znaleźć mieszkanie radiotelegrafisty Weissa?</p>
          <p> Weź ze sobą książkę i podążaj tropem Klossa!
            Filmowe plenery na licznych zdjęciach archiwalnych i współczesnych, dokładne mapki z zaznaczonymi
            miejscami, gdzie pracowała ekipa „Stawki większej niż życie” pod kierunkiem Andrzeja Konica i
            Janusza Morgensterna, ciekawostki z planu, wycinki prasowe z okresu pracy filmowców we
            Wrocławiu.
          </p>
          <ul>
            <li>Autor: Bogdan Bernacki</li>
            <li>Wydawca: Via Wrocław – Małgorzata Urlich-Kornacka; liczba stron: 56</li>
          </ul>
        </section>
        <section>
          <img src={Kloss1} alt="okładka" className="publikacjeIMG" />
          {/* <Img fixed={data.kloss1.childImageSharp.fixed} /> */}
          {/* <Img fixed={data.kloss2.childImageSharp.fixed} /> */}
        </section>
      </section>

      <section className="publikacje">
        <h3>„Dom Handlowy «Feniks». Dawny dom towarowy braci Baraschów”</h3>
        <section>
          <p>
            Monografia poświęcona najstarszemu domowi handlowemu we Wrocławiu – popularnemu i
            lubianemu „Feniksowi”. Z jego działalnością wiąże się wiele ciekawych historii, anegdot i mitów, które
            narastały przez dziesiątki lat i sprawiły, że obiekt ten zyskał status wyjątkowej budowli na
            wrocławskim Rynku.</p>
          <p>Ciekawostek dotyczących tego obiektu jest tyle, że z planowanej początkowo
            małej broszurki powstała książka – bogato ilustrowana archiwalnymi pocztówkami, planami
            architekta Georga Schneidera oraz reklamami z dawnych gazet.</p>
          <p>Jeśli chcą Państwo dowiedzieć się,
            skąd pochodzili bracia Baraschowie, założyciele domu towarowego, na czym polegał ich handlowy
            sukces, co stało się ze szklanym globusem, który zdobił wieżyczkę obiektu od strony Rynku,
            przeczytać o pierwszych we Wrocławiu ruchomych schodach albo dowiedzieć się, co oznaczało w
            żargonie pracowników „Feniksa” słowo „futerko”, koniecznie sięgnijcie po tę książkę.
          </p>
          <ul>
            <li>Autor: Małgorzata Urlich-Kornacka</li>
            <li>Wydawca: Via Nova; liczba stron: 96</li>
          </ul>
        </section>
        <section>
          <img src={Feniks1} alt="okładka" className="publikacjeIMG" />
          {/* <Img fixed={data.feniksokladka.childImageSharp.fixed} /> */}
          {/* <Img fixed={data.fenikstrescsmall.childImageSharp.fixed} /> */}
        </section>
      </section>

      <section className="publikacje">
        <h3>„Dolny Śląsk. 10 najpiękniejszych wycieczek”</h3>
        <section>
          <p>
            Zamki, pałace, oryginalne świątynie, wielkie klasztory, zabytki techniki, gigantyczne sztolnie z okresu
            drugiej wojny światowej – to wszystko można zobaczyć na Dolnym Śląsku. I nie tylko to! Na turystów
            czekają tutaj góry, jaskinie, formacje skalne, rezerwaty przyrody, ogrody i parki. Zapraszamy! Warto
            odkryć i poznać Dolny Śląsk. </p>
          <p>
            Przewodnik prowadzi przez najpiękniejsze zakątki regionu. Dzięki starannie opracowanym trasom
            wycieczek i specjalnie wybranym obiektom można poznać największe atrakcje Dolnego Śląska.
          </p>

          <ul>
            <li>Autorzy: Małgorzata Urlich-Kornacka (tekst), Stanisław Klimek (fotografie)</li>
            <li>Wydawca: Via Nova; liczba stron: 216</li>
            <li>Dostępne wersje językowe: polska, niemiecka, angielska</li>
          </ul>

        </section>
        <section>
          <img src={DlnSlask1} alt="okładka" className="publikacjeIMG" />
          {/* <Img fixed={data.dolnyslask1small.childImageSharp.fixed} /> */}
          {/* <Img fixed={data.dolnyslask2small.childImageSharp.fixed} /> */}
        </section>
      </section>


      <section className="publikacje">
        <h3>„Okolice Wrocławia. Nawigator turystyczny”</h3>
        <section>
          <p>
            Każdy z nas szuka miejsc wyjątkowych – ciekawych, pełnych uroku, pozwalających wypocząć.</p>
          <p>We Wrocławiu i jego okolicach jest ich naprawdę wiele – warto odnaleźć figurki krasnali we Wrocławiu,
            zobaczyć zabytkowy magiel w Małym Muzeum Ludowym w Marcinowie, zagubić się labiryncie
            Błędnych Skał w Górach Stołowych, wejść na Święte Schody w Sośnicy, spróbować słynnych
            wypieków w Jaworze, poznać historię jednego ze śląskich krzyży pokutnych w Stanowicach, przejść
            Podziemną Trasą Turystyczną w Nowej Rudzie.</p>
          <p>Nawigator zawiera kilkanaście propozycji wycieczek
            po Wrocławiu i okolicach.
          </p>
          <ul>
            <li>Autor Małgorzata Urlich-Kornacka</li>
            <li>Wydawca: Carta Blanka; liczba stron: 128</li>
          </ul>
        </section>
        <section>
          <img src={WroOkolice1} alt="okładka" className="publikacjeIMG" />
          {/* <Img fixed={data.wro_okolice1.childImageSharp.fixed} /> */}
          {/* <Img fixed={data.wro_okolice2.childImageSharp.fixed} /> */}
        </section>
      </section>


    </Layout>
  )
}

export default PublikacjePage

export const publikacjeQuery = graphql`
  query Images {
        dolnyslask1small: file(
      relativePath: {eq: "malgorzata-dolnyslask1_small.jpg" }
    ) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    dolnyslask2small: file(
      relativePath: {eq: "malgorzata-dolnyslask2_small.jpg" }
    ) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mock1: file(relativePath: {eq: "malgorzata-mock1_small.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    mock2: file(relativePath: {eq: "malgorzata-mock2_small.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    wroclaw1: file(relativePath: {eq: "przew_wroclaw_cover.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    wroclaw2: file(relativePath: {eq: "przew_wroclaw_content.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    feniksokladka: file(relativePath: {eq: "feniks_okladka.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    fenikstrescsmall: file(relativePath: {eq: "feniks_tresc_small.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    kloss1: file(relativePath: {eq: "kloss_okladka_small.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    kloss2: file(relativePath: {eq: "kloss_tresc_small.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    wro_okolice1: file(relativePath: {eq: "okolice_wroc_cover.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    wro_okolice2: file(relativePath: {eq: "okolice_wroc_content.jpg" }) {
        id
      childImageSharp {
        gatsbyImageData(
          width: 220
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
