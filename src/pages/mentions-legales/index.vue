<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>
<template>
    <HeaderPage />
    <div class="mt-20 mb-10">
        <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Mentions Légales</p>
    </div>
    <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
    <div class="p-5">
    <p class="mt-5">Le présent site internet est édité par la société LAZYDOCS.</p>
    <p class="mt-5">Les directeurs de la publication du site internet sont Edouard Hashimoto, Victor Landwerlin et Ethan Schmitt, fondateurs de la société LAZYDOCS.
    </p>
    <p class="mt-5">Le site internet est hébergé par la société INFOMANIAK, société anonyme de droit suisse au capital de 100 000 francs suisses, immatriculée au Registre du Commerce de Genève sous le numéro CH-660-0059996-1, dont le siège social est situé au 25 rue Eugène-Marziano, 1227 Genève, Suisse.
    </p>
    <p class="mt-5">Le site internet a pour objet de fournir un service de remplissage de papiers administratifs en ligne, en utilisant des informations personnelles fournies par les utilisateurs.

</p>
    <p class="mt-5">L'accès et l'utilisation du site internet sont soumis aux conditions générales d'utilisation disponibles sur le site.</p>
    <p class="mt-5">Le site internet et son contenu sont protégés par le droit d'auteur et les droits de propriété intellectuelle. Toute reproduction, représentation, diffusion ou exploitation du site ou de son contenu, en tout ou partie, sans l'autorisation préalable et écrite de la société LAZYDOCS, est interdite et constitue une contrefaçon sanctionnée par le code de la propriété intellectuelle.</p>
    <p class="mt-5">La société LAZYDOCS s'efforce d'assurer la sécurité et la confidentialité des données personnelles collectées et traitées sur le site internet, conformément à la réglementation en vigueur en matière de protection des données personnelles. La société LAZYDOCS s'engage à ne pas revendre, céder, louer ou transférer les données personnelles à des tiers sans le consentement exprès des utilisateurs. La société LAZYDOCS met en œuvre des mesures techniques et organisationnelles appropriées pour prévenir toute perte, altération, accès non autorisé ou divulgation des données personnelles. Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter la politique de confidentialité disponible sur le site.</p>
    <p class="mt-5">La société LAZYDOCS ne peut être tenue responsable des dommages directs ou indirects résultant de l'utilisation du service de remplissage de papiers administratifs en ligne, notamment en cas d'erreur, d'omission, de retard, de non-conformité ou de contestation des documents remplis. La société LAZYDOCS ne garantit pas l'exhaustivité, l'exactitude, la fiabilité ou la pertinence des informations fournies par le service. La société LAZYDOCS ne fournit pas de conseil juridique, fiscal ou administratif et ne saurait se substituer à l'avis d'un professionnel qualifié. Il appartient aux utilisateurs de vérifier la validité et la conformité des documents remplis avant de les utiliser ou de les transmettre aux autorités compétentes.</p>
    <p class="mt-5">Pour toute question ou réclamation relative au site internet ou au service de remplissage de papiers administratifs en ligne, vous pouvez contacter la société LAZYDOCS par la page contact présente sur le site.</p>
    </div>
    <div class="p-5 w-full lg:w-1/2 text-blue-500 underline">
        <RouterLink to="/politique-de-confidentialite">
        <p>Politique de confidentialité</p>
        </RouterLink>
        <RouterLink to="/conditions-generales-d-utilisations">
        <p>Conditions Générales d'Utilisations</p>
        </RouterLink>
        <RouterLink to="/charte-d-utilisation-et-de-respect-de-la-vie-privee">
        <p>Charte d'Utilisation et de Respect de la Vie Privée</p>
        </RouterLink>
        <RouterLink to="/politique-relative-aux-cookies-et-aux-données-personnelles">
        <p>Politique relative aux cookies et aux données personnelles</p>
        </RouterLink>
    </div>
    <FooterPage />
</template>