import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Video from "../components/video"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NewsPage = ({ data }) => (
    <Layout>
        <Seo title="Aktualności" />

        <h2>Aktualności</h2>

        <h3>Muzyczny Wrocław na przestrzeni wieków - saksofon i nie tylko... - 16 października 2021</h3>

        <GatsbyImage image={getImage(data.afisz_MuzycznyWroclaw.childImageSharp.gatsbyImageData)} alt="afisz" />

        <h3>Spotkania literackie "Z Wrocławiem w tle"</h3>

        <p>Szanowni Państwo, ruszamy z nowym projektem pt. "Z Wrocławiem w tle", który obejmować będzie cztery spotkania literackie z wrocławskimi autorami oraz cztery wieczorne wycieczki tematyczne. Spotkania odbywać się będą w nowym Odra Centrum stojącym przy moście Grunwaldzkim. Spotkania i wycieczki są bezpłatne, obowiązują zapisy.</p>
        <p>Cykl prowadzi: Małgorzata Urlich-Kornacka</p>

        <p>Wrocław jest bez wątpienia miastem literatury i ma się czym poszczycić. Nie przez przypadek został Światową Stolicą Książki UNESCO, a wiersz poety Tadeusza Różewicza stał się w 2016 roku oficjalnym hymnem i od tamtego czasu również oficjalną muzyczną wizytówką każdej kolejnej Światowej Stolicy Książki UNESCO.</p>

        <p>Liczne wydarzenia literackie skłoniły nas do przygotowania własnego projektu łączącego spotkania z autorami z tematycznymi wycieczkami i promocją niezwykłego miejsca na mapie Wrocławia – nowego Odra Centrum.</p>

        <ul>
            <li><strong>21 lipca, godz. 18.00 Spacer "Wierszem po wodzie pisane" - Wrocław oczami poetów</strong></li>
            <li><strong>22 lipca, godz. 16.00 Spotkanie z wrocławską poetką Ewą Sonnenberg; miejsce: Odra Centrum (przy moście Grunwaldzkim)</strong></li>
        </ul>

        <p>Poprzednie spotkanie miało miejsce 24-25 czerwca 2021.</p>

        <ul>
            <li>24 czerwca, godz. 16.00; spotkanie z wrocławską autorką Jolantą Marią Kaletą - Odra Centrum.</li>
            <li>25 czerwca, godz. 17.00; spacer "Złoto Wrocławia. Między faktami a fikcją literacką".</li>
        </ul>

        <section className="videos">

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/QTtAjLO0vK0" videoTitle='"Spacer literacki na podstawie powieści Jolanty Marii Kalety" [11:41]' /><div>"Spacer literacki na podstawie powieści Jolanty Marii Kalety" [11:41]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/J1jnpgsApe4" videoTitle='"Spotkanie literackie z Jolantą Marią Kaletą w ramach projektu "Z Wrocławiem w tle"" [1:02:29]' /><div>"Spotkanie literackie z Jolantą Marią Kaletą w ramach projektu "Z Wrocławiem w tle"" [1:02:29]</div></div>

        </section>

        <h3>Poprzednie wydarzenia</h3>


        <section className="videos">
            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PYpKGcrwpIc" videoTitle='"Spacer literacki na podstawie powieści Malwiny Ferenz" [12:41]' /><div>"Spacer literacki na podstawie powieści Malwiny Ferenz" [12:41]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/PA27QdiequQ" videoTitle='"Spotkanie literackie z Malwiną Ferenz w ramach projektu "Z Wrocławiem w tle" [58:12]' /><div>"Spotkanie literackie z Malwiną Ferenz w ramach projektu "Z Wrocławiem w tle"" [58:12]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/Wfz4xaZrpuY" videoTitle='"Spacer literacki „Kryminalny Wrocław kobiecym okiem" na podstawie powieści Nadii Szagdaj" [8:36]' /><div>"Spacer literacki „Kryminalny Wrocław kobiecym okiem" na podstawie powieści Nadii Szagdaj" [8:36]</div></div>

            <div><Video className="video" videoSrcURL="https://www.youtube.com/embed/oYJIqdKD1wI" videoTitle='"Spotkanie literackie z Nadią Szagdaj w ramach projektu "Z Wrocławiem w tle"" [1:12:08]' /><div>"Spotkanie literackie z Nadią Szagdaj w ramach projektu "Z Wrocławiem w tle"" [1:12:08]</div></div>
        </section>

        <hr />
        <ul className="listWithSquares">
            <li>Projekt finansowany przez Wrocławski Dom Literatury oraz Wydział Promocji Miasta i Turystyki Urzędu Miejskiego we Wrocławiu.</li>
            <li>Partnerzy projektu: <a href="https://przewodnicy.org">Stowarzyszenie TUiTAM</a> oraz Odra Centrum</li>
            <li><a href="https://visitwroclaw.eu/">Oficjalny Serwis Turystyczny Wrocławia - visitwroclaw.eu</a></li>
            <li><a href="https://literatura.wroclaw.pl/">Wrocławski Dom Literatury - literatura.wroclaw.pl</a></li>
        </ul>

        <hr />

        <section>
            <GatsbyImage image={getImage(data.afisz_sierpien.childImageSharp.gatsbyImageData)} alt="afisz" />
            <GatsbyImage image={getImage(data.afisz_mock.childImageSharp.gatsbyImageData)} alt="afisz" />
            <GatsbyImage image={getImage(data.afisz_lipiec.childImageSharp.gatsbyImageData)} alt="afisz" />
            <GatsbyImage image={getImage(data.afisz_czerwiec.childImageSharp.gatsbyImageData)} alt="afisz" />
            <GatsbyImage image={getImage(data.afisz_maj.childImageSharp.gatsbyImageData)} alt="afisz" />
            <GatsbyImage image={getImage(data.afisz_luty.childImageSharp.gatsbyImageData)} alt="afisz" />
        </section>

    </Layout >
)

export default NewsPage

export const indexQuery = graphql`
  query NewsImages {
    afisz_sierpien: file(
      relativePath: {eq: "KlaraSchulz.jpg" }
    ) {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
      }
    }
    afisz_lipiec: file(
      relativePath: {eq: "afisz-zwrowtle4-640x960.jpg" }
    ) {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
      }
    }
    afisz_czerwiec: file(
      relativePath: {eq: "afisz-zwrowtle_czerwiec_x960.jpg" }
    ) {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
      }
    }
        afisz_maj: file(
      relativePath: {eq: "afisz-z_wroclawiem_w_tle-maj.jpg" }
    ) {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
      }
    }
    afisz_luty: file(
      relativePath: {eq: "afisz-z_wroclawiem_w_tle.jpg" }
    ) {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
      }
    }
       afisz_mock: file(
      relativePath: {eq: "mock-spacer-afisz800.jpg" }
    ) {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
      }
    }
    afisz_MuzycznyWroclaw: file(
      relativePath: {eq: "afisz-MuzycznyWroclawx1000.jpg" }
    ) {
          childImageSharp {
            gatsbyImageData(
              width: 640
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
      }
    }
  }
`
