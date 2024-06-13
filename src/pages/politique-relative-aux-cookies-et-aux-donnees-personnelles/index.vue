<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>
<template>
    <HeaderPage />
    <div class="mt-20 mb-10">
        <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Politique relative aux cookies et aux données personnelles</p>
    </div>
    <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
    <div class="p-5">
        <p>Chez LAZYDOCS, nous accordons une grande importance à la protection de votre vie privée et à la transparence quant à l'utilisation des cookies sur notre site internet. Cette politique vise à vous informer sur la manière dont nous utilisons les cookies et à vous expliquer vos droits en matière de données personnelles.</p>
        <p class="mt-5"><strong>Qu'est-ce qu'un cookie ?</strong></p>
        <p class="mt-5">Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site internet. Les cookies sont largement utilisés pour permettre aux sites internet de fonctionner de manière efficace et pour fournir des informations aux propriétaires du site.</p>
        <p class="mt-5"><strong>Utilisation des cookies :</strong></p>
        <p class="mt-5">Nous utilisons des cookies pour améliorer votre expérience de navigation sur notre site internet. Ces cookies peuvent être classés comme suit :</p>
        <p class="mt-5"><strong>Cookies strictement nécessaires :</strong></p>
        <p class="mt-5">Ces cookies sont essentiels au fonctionnement de notre site internet et vous permettent d'accéder à certaines fonctionnalités, telles que la connexion à votre compte.</p>
        <p class="mt-5"><strong>Cookies de performance :</strong></p>
        <p class="mt-5">Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site internet, en collectant des informations sur les pages visitées et les éventuels messages d'erreur rencontrés. Ces données nous permettent d'améliorer constamment notre site et de fournir une meilleure expérience utilisateur.</p>
        <p class="mt-5"><strong>Cookies de fonctionnalité :</strong></p>
        <p class="mt-5">Ces cookies permettent au site internet de se souvenir des choix que vous avez faits (comme votre langue préférée ou la région où vous vous trouvez) et fournissent des fonctionnalités améliorées et personnalisées.</p>
        <p class="mt-5"><strong>Gestion des cookies :</strong></p>
        <p class="mt-5">Vous avez le contrôle sur l'acceptation des cookies sur notre site internet. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous alerter lorsque des cookies sont envoyés. Veuillez noter que la désactivation des cookies peut affecter certaines fonctionnalités de notre site internet.</p>
        <p class="mt-5"><strong>Protection des données personnelles :</strong></p>
        <p class="mt-5">En plus des cookies, nous collectons et traitons des données personnelles lorsque vous utilisez notre site internet et nos services. Nous respectons les lois applicables en matière de protection des données personnelles et nous nous engageons à assurer la sécurité et la confidentialité de vos données.</p>
        <p class="mt-5">Nous utilisons vos données personnelles uniquement dans le cadre de la fourniture du service demandé et pour vous informer sur nos produits et services, avec votre consentement préalable lorsque cela est nécessaire.</p>
        <p class="mt-5">Vous avez le droit de consulter, de corriger, de supprimer ou de limiter l'utilisation de vos données personnelles. Vous pouvez également vous opposer au traitement de vos données personnelles ou exercer votre droit à la portabilité des données.</p>
        <p class="mt-5">Pour exercer vos droits ou pour toute question relative à notre politique de confidentialité et à l'utilisation des cookies, veuillez nous contacter via la page de contact disponible sur notre site internet.</p>
        <p class="mt-5"><strong>Modification de la politique relative aux cookies et aux données personnelles :</strong></p>
        <p class="mt-5">Nous nous réservons le droit de modifier cette politique à tout moment. Toute modification sera publiée sur notre site internet avec la date d'entrée en vigueur. Nous vous encourageons à consulter régulièrement notre politique pour rester informé de nos pratiques en matière de cookies et de données personnelles.</p>
    </div>
    <div class="p-5 w-full lg:w-1/2 text-blue-500 underline">
        <RouterLink to="/mentions-legales">
        <p>Mentions Légales</p>
        </RouterLink>
        <RouterLink to="/politique-de-confidentialite">
        <p>Politique de confidentialité</p>
        </RouterLink>
        <RouterLink to="/conditions-generales-d-utilisations">
        <p>Conditions Générales d'Utilisations</p>
        </RouterLink>
        <RouterLink to="/charte-d-utilisation-et-de-respect-de-la-vie-privee">
        <p>Charte d'Utilisation et de Respect de la Vie Privée</p>
        </RouterLink>
    </div>
    <FooterPage />
</template>