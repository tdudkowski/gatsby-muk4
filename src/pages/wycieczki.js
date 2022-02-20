import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const WycieczkiPage = ({ data }) => {
      return (
            <Layout>
                  <Seo title="Wycieczki" />

                  <h2>Wycieczki – przykładowa oferta TOP 10</h2>


                  <p>
                        Poniżej kilka propozycji wycieczek. Każda z proponowanych tras dostosowywana jest do wieku,
                        zainteresowań i możliwości grupy. Czas ich trwania waha się od półtorej do trzech godzin.
                  </p>

                  <GatsbyImage image={getImage(data.wycieczka.childImageSharp)} alt="wycieczka" />

                  <h3>Dla wszystkich</h3>

                  <ul>
                        <li><strong>1. „Wrocław – miasto spotkań”</strong> – najpopularniejsza trasa, wiodąca z Rynku wrocławskiego przez Jatki, Uniwersytet Wrocławski, Ossolineum, Halę Targową na Ostrów Tumski, zwany kolebką miasta
                              lub „śląskim Watykanem”. Dogodne położenie nad Odrą i jej czterema głównymi dopływami, ważne
                              szlaki, którymi podążały kupieckie karawany, założone w 1000 roku biskupstwo wrocławskie i
                              pielgrzymi podróżujący z Czech do grobu św. Wojciecha w Gnieźnie – wszystkie te czynniki wpłynęły
                              na to, że Wrocław od początku stał się „miastem spotkań”. Tutaj spotyka się wschód z zachodem,
                              tradycja z nowoczesnością, stara architektura z nową. Wycieczka prowadzi po najpiękniejszych
                              miejscach, jest to spacer śladami architektury, ciekawej historii miasta – „mikrokosmosu Europy”,
                              śladami wrocławskich legend oraz anegdot o sławnych mieszkańcach.</li>
                        <li><strong>2. „Wrocławskie NAJ”</strong> – wycieczka szlakiem mniej lub bardziej oczywistych rekordów naszego miasta:
                              najdłużej działający dom handlowy, Gitarowy Rekord Guinnessa, jedyny na świecie pomnik
                              przepukliny pępkowej, pierwszy wrocławski krasnal, najwyżej położony most Starego Miasta – te i
                              inne ciekawe rekordy i miejskie osobliwości pozwolą na poznanie Wrocławia z zupełnie innej strony.
                              Różnorodność obiektów i historii z nimi związanych oraz czasów, w których powstawały, tworzy
                              obraz miasta nietuzinkowego, miasta z charakterem. To wrocławskie NAJ dla NAJbardziej
                              dociekliwych!</li>
                  </ul>

                  <h3>Dla młodzieży</h3>

                  <ul>
                        <li><strong>3. „Wrocław dla odkrywców”</strong> – wycieczka zmuszająca do myślenia i pobudzająca do kreatywności.
                              Tym razem to nie przewodnik będzie grał pierwsze skrzypce! To uczestnicy muszą się wykazać
                              zaangażowaniem, szybkością i spostrzegawczością. Po niedługim spacerze z przewodnikiem
                              otrzymają bowiem grę miejską i będą musieli samodzielnie rozwiązać zadania: odszukać różne
                              miejsca, znajdujące się na Rynku wrocławskim, rozszyfrować i odnaleźć informacje ukryte na
                              fasadach budynków, czasami zapytać o coś ich mieszkańców. Dla zwycięskiej grupy przewidziana jest
                              mała niespodzianka. Wycieczka idealna również dla polsko-niemieckich wymian szkolnych.</li>
                        <li><strong>4. „Wrocław literacko i filmowo”</strong> – spacer prezentujący zarówno dorobek literacki, jak i filmowy
                              naszego miasta. W trakcie wędrówki przybliżone zostaną sylwetki pisarzy i poetów wrocławskich,
                              miejsca z nimi związane i ich dzieła oraz sylwetki reżyserów, którzy zdecydowali się umiejscowić akcję
                              swoich filmów we Wrocławiu. Podczas wycieczki pokażemy mniej lub bardziej oczywiste plenery i
                              opowiemy o dziełach, które stały się inspiracją do realizacji takich filmów i seriali jak „Sługi boże”,
                              „Strachy”, „Popiół i diament”, „Lalka”, „Niemcy”, „Bułeczka”, „Fantom”, „Zaraza”, „Uciec jak
                              najbliżej”, „Złote Koło”, „Kobieta w Berlinie”.</li>
                  </ul>

                  <h3>Dla dorosłych</h3>

                  <ul>
                        <li><strong>5. „Śladami Eberharda Mocka”</strong> – propozycja dla zwolenników nieszablonowego zwiedzania miasta,
                              którzy chcieliby się zapoznać z historią i architekturą Wrocławia, zagłębiając się jednocześnie w świat
                              znakomitych powieści kryminalnych Marka Krajewskiego. Literacki spacer z dreszczykiem będzie
                              okazją do poznania złożonego i wyjątkowego charakteru miasta. Podczas wędrówki nie zabraknie
                              ciekawostek historycznych dotyczących odwiedzanych miejsc, cytatów z powieści oraz odwołań do
                              wydarzeń z powieści Marka Krajewskiego. Zapraszamy do podróży w czasie śladami zaginionego
                              Breslau…</li>
                  </ul>
                  <p>Dla poszukiwaczy dodatkowych wrażeń proponujemy trasę z elementami animacji turystycznej:
                        kostiumem, muzyką i małym co nieco.</p>
                  <ul>
                        <li><strong>6. „Kryminalny Wrocław kobiecym okiem”</strong> – wycieczka na podstawie wrocławskich retrokryminałów Nadii Szagdaj oraz innych opowieści z dreszczykiem, których autorkami lub bohaterkami są kobiety.
                              Podczas spaceru będzie można usłyszeć, jak zbrodniczy Wrocław wygląda z kobiecej perspektywy,
                              czym charakteryzują się historie kryminalne pisane przez kobiety oraz przypomnieć sobie tragiczne
                              losy kobiet związanych z Wrocławiem (m.in. Clara Immerwahr-Haber, Edyta Stein, Anna German,
                              Agnieszka Kotlarska-Świątek). To wycieczka z dreszczykiem – nie tylko dla kobiet!
                              Dla poszukiwaczy dodatkowych wrażeń proponujemy trasę z elementami animacji turystycznej:
                              kostiumem, muzyką i małym co nieco.</li>
                  </ul>

                  <h3>Dla dzieci</h3>

                  <ul>
                        <li><strong>7. „Szlakiem legend wrocławskich”</strong> – wycieczka po Starym Mieście lub Ostrowie Tumskim. Na magię
                              miasta składają się nie tylko wyjątkowe budowle, ale również przepiękne legendy i historie. Dlaczego
                              św. Jadwiga bez butów chodziła? Skąd się wziął zwyczaj topienia marzanny? Co się stało z najwyższą
                              wieżą we Wrocławiu, jak powstała miejska waga oraz kto i dlaczego pojawia się w nocy na „mostku
                              pokutnic”? Uczestnicy wycieczki poznają wrocławskie legendy, niezwykłe (prawdziwe) historie i
                              wrocławskie anegdoty i zobaczą miejsca, z którymi związani są legendarni bohaterowie.</li>
                        <li><strong>8. „W królestwie Viadrusa”</strong> – spacer z Odrą w tle, która towarzyszyła Wrocławiowi od zarania
                              dziejów, zapewniając mu naturalną ochronę, stanowiąc drogę komunikacyjną, dostarczając jego
                              mieszkańcom pożywienia i napędzając liczne niegdyś młyny wrocławskie. Odra ma swojego boga
                              –Viadrusa. Przedstawiany jest on jako potężny, muskularny mężczyzna z wiosłem w ręku, które
                              symbolizuje żeglowność rzeki. Gdzie mieszka bóg Viadrus? Co się dzieje, kiedy Viadrusa ogarnia złość?
                              Dlaczego Wrocław nazywano Wenecją Północy? Odpowiedzi na te pytania będzie można usłyszeć
                              podczas spaceru nadodrzańskimi bulwarami i wyspami, licznymi kładkami i mostami.</li>
                  </ul>


                  <h3>Dla rodzin z dziećmi</h3>

                  <ul>
                        <li><strong>9. „Czy wy wiecie, czy nie wiecie? – Krasnoludki są na świecie!”</strong> – wycieczka rodzinna dla wszystkich
                              wielbicieli krasnali: tych małych i tych dużych. Co zachwyciło krasnoludki we Wrocławiu, że założyły
                              właśnie tutaj swoją osadę, stając się nieodłącznym symbolem naszego miasta? Jak wyglądają? Jak się
                              nazywają i skąd biorą się niektóre krasnalowe imiona? Co krasnoludki lubią najbardziej? Odpowiedzi
                              na wszystkie te pytania będzie można uzyskać na naszym spacerze, podczas którego nie zabraknie
                              również wspólnych zabaw oraz krasnalowych zadań.</li>
                        <li><strong>10. „Wrocław z dreszczykiem – wycieczka śladami mrocznych legend i opowieści”</strong> – dla wszystkich,
                              którzy lubią się bać (nawet troszeczkę) i tych, którzy lubią słuchać historii niezwykłych. Podczas
                              rodzinnego spaceru dowiemy się, komu zmroził krew w żyłach wściekły duch skąpej przekupki, kto
                              pojawia się na mostku pokutnic i jakie kary wykonywano pod pręgierzem. Poznamy wrocławskie
                              legendy i niezwykłe historie prawdziwe.</li>
                  </ul>

                  <p>Polecamy również inne wycieczki tematyczne, m.in.: „Filmowy Wrocław”, „Literacki Wrocław”,
                        „Artystyczny Wrocław”, „Muzyczny Wrocław”, „Miasto przyszłości, czyli modernizm we Wrocławiu”,
                        „Śladami kultury żydowskiej we Wrocławiu”, „Rejs statkiem z opowieścią przewodnicką”.</p>

            </Layout>
      )
}

export default WycieczkiPage

export const publikacjeQuery = graphql`
  query ImagesWycieczki {
        wycieczka: file(
      relativePath: {eq: "wycieczka3.jpg" }
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