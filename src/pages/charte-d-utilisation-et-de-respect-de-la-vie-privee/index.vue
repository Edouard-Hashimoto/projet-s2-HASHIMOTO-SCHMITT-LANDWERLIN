<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>
<template>
    <HeaderPage />
    <div class="mt-20 mb-10">
        <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Charte d'Utilisation et de respect de la vie Privée</p>
    </div>
    <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
    <div class="p-5">
    <p>Cette charte d'utilisation et de respect de la vie privée définit les règles, les comportements attendus des utilisateurs lors de l'utilisation de notre site internet et de nos services, ainsi que notre engagement envers la protection de la vie privée des utilisateurs. En utilisant notre site, vous acceptez implicitement cette charte d'utilisation et de respect de la vie privée. Si vous n'acceptez pas cette charte, veuillez ne pas utiliser notre site.</p>
    <p class="mt-5"><strong>Respect de la législation :</strong></p>
    <p class="mt-5">Vous vous engagez à respecter toutes les lois, règles et réglementations applicables en matière de protection des données personnelles et de vie privée lors de l'utilisation de notre site et de nos services.</p>
    <p class="mt-5"><strong>Utilisation appropriée :</strong></p>
    <p class="mt-5">Vous vous engagez à utiliser notre site et nos services de manière appropriée et légale, et à ne pas les utiliser à des fins illégales, frauduleuses ou abusives.</p>
    <p class="mt-5"><strong>Collecte et Utilisation des Données Personnelles :</strong></p>
    <p class="mt-5">Nous collectons et utilisons vos données personnelles conformément à notre politique de confidentialité. En utilisant notre site, vous consentez à la collecte et à l'utilisation de vos données personnelles telles que décrites dans notre politique de confidentialité.</p>
    <p class="mt-5"><strong>Sécurité des Données :</strong></p>
    <p class="mt-5">Nous nous engageons à protéger la sécurité et la confidentialité de vos données personnelles. Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour prévenir tout accès non autorisé, toute divulgation, toute altération ou toute destruction de vos données personnelles.</p>
    <p class="mt-5"><strong>Consentement et Contrôle des Données :</strong></p>
    <p class="mt-5">Vous avez le droit de donner votre consentement à la collecte et à l'utilisation de vos données personnelles, et vous pouvez retirer ce consentement à tout moment. Vous avez également le droit d'accéder, de rectifier, de supprimer ou de limiter l'utilisation de vos données personnelles.</p>
    <p class="mt-5"><strong>Cookies :</strong></p>
    <p class="mt-5">Nous utilisons des cookies pour améliorer votre expérience de navigation sur notre site. En utilisant notre site, vous consentez à l'utilisation de cookies conformément à notre politique de cookies.</p>
    <p class="mt-5"><strong>Sécurité du Compte :</strong></p>
    <p class="mt-5">Vous êtes responsable de maintenir la sécurité de votre compte utilisateur et de vos identifiants de connexion. Ne partagez pas vos identifiants avec d'autres personnes et informez-nous immédiatement en cas d'utilisation non autorisée de votre compte.</p>
    <p class="mt-5"><strong>Signalement des Abus :</strong></p>
    <p class="mt-5">Si vous observez un comportement inapproprié, abusif ou contraire à cette charte d'utilisation et de respect de la vie privée, veuillez nous le signaler immédiatement via les canaux de communication disponibles sur notre site.</p>
    <p class="mt-5"><strong>Modification de la Charte :</strong></p>
    <p class="mt-5">Nous nous réservons le droit de modifier cette charte d'utilisation et de respect de la vie privée à tout moment, sans préavis. Toute modification sera publiée sur notre site. Votre utilisation continue de notre site après la publication des modifications constitue votre acceptation de ces modifications.</p>
    <p class="mt-5">En utilisant notre site, vous acceptez cette charte d'utilisation et de respect de la vie privée. Si vous avez des questions concernant cette charte, veuillez nous contacter via les canaux de communication disponibles sur notre site.</p>
    </div>
    <div class="p-5 w-full lg:w-1/2 text-blue-500 underline">
        <RouterLink to="/mentions-legales">
        <p>Mentions Légales</p>
        </RouterLink>
        <RouterLink to="/conditions-generales-d-utilisations">
        <p>Conditions Générales d'Utilisations</p>
        </RouterLink>
        <RouterLink to="/politique-de-confidentialite">
        <p>Politique de confidentialité</p>
        </RouterLink>
        <RouterLink to="/politique-relative-aux-cookies-et-aux-donnees-personnelles">
        <p>Politique relative aux cookies et aux données personnelles</p>
        </RouterLink>
    </div>
    <FooterPage />
</template>