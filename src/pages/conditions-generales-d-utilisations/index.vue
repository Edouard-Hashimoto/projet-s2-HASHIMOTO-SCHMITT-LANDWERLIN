<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>
<template>
    <HeaderPage />
    <div class="mt-20 mb-10">
        <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Conditions Générales d'Utilisations</p>
    </div>
    <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
    <p>Bienvenue sur le site internet de LAZYDOCS. Veuillez lire attentivement ces conditions générales d'utilisation (ci-après dénommées les "CGU") avant d'utiliser notre site internet et nos services. En utilisant notre site, vous acceptez implicitement ces CGU. Si vous n'acceptez pas ces CGU, veuillez ne pas utiliser notre site.
    </p>
    <p class="mt-5"><strong>Description du service :</strong></p>
    <p class="mt-5">Le site internet LAZYDOCS, exploité par LAZYDOCS, propose un service de remplissage de papiers administratifs en ligne. Ce service permet aux utilisateurs de remplir et de soumettre des formulaires administratifs en ligne en fournissant les informations personnelles requises.
    </p>
    <p class="mt-5"><strong>Utilisation du site :</strong></p>
    <p class="mt-5">En utilisant notre site, vous vous engagez à ne pas utiliser le service à des fins illégales ou interdites par ces CGU. Vous acceptez de vous conformer à toutes les lois, règles et réglementations applicables.
    </p>
    <p class="mt-5"><strong>Compte utilisateur :</strong></p>
    <p class="mt-5">Certains services de notre site peuvent nécessiter la création d'un compte utilisateur. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités qui se déroulent sous votre compte.</p>
    <p class="mt-5"><strong>Propriété intellectuelle :</strong></p>
    <p class="mt-5">Le site internet et son contenu sont protégés par le droit d'auteur et d'autres lois sur la propriété intellectuelle. Vous acceptez de respecter tous les avis de droits d'auteur et autres avis de propriété contenus sur le site.</p>
    <p class="mt-5"><strong>Limitation de responsabilité :</strong></p>
    <p class="mt-5">LAZYDOCS ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser le service. Nous ne garantissons pas l'exactitude, l'exhaustivité ou la pertinence des informations fournies par le service.
    </p>
    <p class="mt-5"><strong>Modifications des CGU :</strong></p>
    <p class="mt-5">Nous nous réservons le droit de modifier ces CGU à tout moment, sans préavis. Toute modification sera publiée sur notre site internet. Votre utilisation continue de notre site après la publication des modifications constitue votre acceptation de ces modifications.
    </p>
    <p class="mt-5"><strong>Droit applicable et juridiction compétente :</strong></p>
    <p class="mt-5">Ces CGU sont régies et interprétées conformément aux lois en vigueur. En cas de litige, les tribunaux compétents seront ceux désignés par la loi.
    </p>
    <p class="mt-5">En utilisant notre site, vous acceptez ces CGU. Si vous avez des questions concernant ces CGU, veuillez nous contacter via la page de contact disponible sur notre site.</p>

    <div class="p-5 w-full lg:w-1/2 text-blue-500 underline">
        <RouterLink to="/politique-de-confidentialite">
        <p>Politique de confidentialité</p>
        </RouterLink>
        <RouterLink to="/mentions-legales">
        <p>Mentions légales</p>
        </RouterLink>
        <RouterLink to="/charte-d-utilisation-et-de-respect-de-la-vie-privee">
        <p>Charte d'Utilisation et de Respect de la Vie Privée</p>
        </RouterLink>
        <RouterLink to="/politique-relative-aux-cookies-et-aux-donnees-personnelles">
        <p>Politique relative aux cookies et aux données personnelles</p>
        </RouterLink>
    </div>
    <FooterPage />
</template>