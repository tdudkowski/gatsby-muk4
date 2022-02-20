import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DeutschPage = ({ data }) => {

  return (
    <Layout>
      <Seo title="Deutsch" />

      <h2>Stadtführungen und Erlebnisreisen in Breslau und Niederschlesien mit Małgorzata Urlich-Kornacka</h2>

      <h3>Kontakt</h3>

      <ul className="listWithSquares bcard">
        <li>Via Wrocław – Małgorzata Urlich-Kornacka<br />
          ul. Budziszyńska 27a/26<br />
          54-434 Wrocław</li>
        <li>Umsatzsteuer-Identifikationsnummer PL-6161391782</li>
        <li>Telefon: +48 607 239 776</li>
        <li>E-Mail: malgorzata.wroclove@gmail.com oder m.urlich@interia.pl</li>
        <li>www.viawroclaw.com</li>
      </ul>

      <GatsbyImage image={getImage(data.wycieczka.childImageSharp.gatsbyImageData)} alt="wycieczka" />

      <h3>Über mich</h3>

      <p>Ich bin ein Mensch, der immer in Bewegung ist. Je mehr Dinge um mich herum passieren, desto mehr fühle ich mich in meinem Element. Ich teile mein Leben zwischen drei großen Leidenschaften auf: Führungen (Tourismus), deutsche Sprache und Amateurtheater. Sehr oft gelingt es mir, diese Leidenschaften zu verbinden – ich habe lange Zeit als Deutschlehrerin und Sprachanimateurin bei einem gesamtpolnischen Projekt „Deutsch-Wagen-Tour“ gearbeitet. Ich stieg mit meinem Zauberkoffer in ein buntes Auto (den sogenannten Deutschwagen) und reiste durch ganz Schlesien, um den Kindern und Jugendlichen die deutsche Sprache näherzubringen und sie zum Sprachenlernen anzuregen. Die Arbeit mit jungen Menschen macht mir nach wie vor Spaß und ich führe auch gerne Workshops, Animationen und Stadtführungen für deutsch-polnische Austauschgruppen durch.</p>

      <p>Der Kontakt mit der deutschen Sprache ist für mich sehr wichtig. Ich arbeite eng mit dem Senfkorn Verlag und schreibe regelmäßig Artikel für die Zeitschrift „Schlesien heute“ (<a href="https://www.schlesien-heute.de/">Schlesien heute - www.schlesien-heute.de</a>). Zusätzlich bin ich als freie Mitarbeiterin des Schlesischen Museums zu Görlitz tätig und bereite Texte für den Blog SILESIA NEWS (<a href="http://www.silesia-news.de/">Silesia News - www.silesia-news.de</a>) vor, um den deutschen Lesern Breslau und die Region Niederschlesien vorzustellen und aktuelle Informationen zu übermitteln.</p>

      <p>Es macht mir Spaß, Treffen mit berühmten Breslauern durchzuführen, Veranstaltungen zu organisieren und unbekannte Fäden der alten Breslauer Geschichte aufzudecken. Alte Texte, Inschriften und Ansichtskarten, die sich die Menschen vor hundert Jahren schickten – all das hat eine einzigartige Magie, die anzieht und nicht mehr loslässt. Das ist vielleicht der Grund, warum ich die Retrokrimis der polnischen Autoren wie Nadia Szagdaj oder Marek Krajewski liebe. Anlässlich des 20-jährigen Jubiläums des Schaffens von dem Schriftsteller Krajewski wurde auf meine Initiative bei der Jahrhunderthalle der Lesezwerg „Ebi“ aufgestellt, der zum Lesen und zum Entdecken des multikulturellen Erbes unserer Stadt anregt.</p>

      <p>Ich mache gern individuelle Führungen für kleine Gruppen oder Familien: allgemeine oder Themenführungen: zum Thema Musik, Literatur, Architektur.</p>

      <p>Wenn Sie also auf der Suche nach etwas Besonderem für Sie, Ihre Familien oder Ihre Gruppe sind, stehe ich Ihnen gerne zur Verfügung!</p>

    </Layout >
  )
}

export default DeutschPage

export const publikacjeQuery = graphql`
  query ImagesDeutsch {
        wycieczka: file(
      relativePath: {eq: "wycieczka2.jpg" }
    ) {
        childImageSharp {
          gatsbyImageData(
            width: 900
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
      }
    }
  }
  `