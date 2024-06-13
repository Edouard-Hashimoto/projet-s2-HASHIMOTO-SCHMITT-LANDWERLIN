<script setup lang="ts">
import HeaderPage from '@/components/Header.vue'
import FooterPage from '@/components/Footer.vue'
</script>
<template>
    <HeaderPage />
    <div class="mt-20 mb-10">
        <p class="font-title text-3xl lg:text-6xl xl:text-6xl text-center">Politique de confidentialité</p>
    </div>
    <div class="w-[50%] h-1 bg-black m-10 mx-auto"></div>
    <div class="p-5">
        <p>La protection de vos données personnelles est une priorité pour LAZYDOCS. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site internet et notre service de remplissage de papiers administratifs en ligne.</p>
        <p class="mt-5"><strong>Collecte et utilisation des données personnelles :</strong></p>
        <p class="mt-5">Nous collectons des informations personnelles lorsque vous utilisez notre service, notamment lorsque vous remplissez des papiers administratifs en ligne. Ces informations peuvent inclure votre nom, votre adresse, votre numéro de téléphone, votre adresse e-mail, ainsi que d'autres données nécessaires à la fourniture du service.</p>
        <p class="mt-5">Nous utilisons ces informations pour vous fournir le service demandé, pour communiquer avec vous concernant votre utilisation du service, et pour améliorer notre site internet et nos services.</p>
        <p class="mt-5"><strong>Sécurité et confidentialité des données :</strong></p>
        <p class="mt-5">Nous nous engageons à protéger la sécurité et la confidentialité de vos données personnelles. Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour prévenir toute perte, altération, accès non autorisé ou divulgation des données personnelles.</p>
        <p class="mt-5">Nous ne revendons, cédons, louons ou transférons pas vos données personnelles à des tiers sans votre consentement exprès. Nous ne conservons vos données que le temps nécessaire à la fourniture du service, sauf si une période de conservation plus longue est exigée ou autorisée par la loi.</p>
        <p class="mt-5"><strong>Droits des utilisateurs :</strong></p>
        <p class="mt-5">Vous avez le droit de demander l'accès, la rectification, la suppression ou la limitation du traitement de vos données personnelles. Vous pouvez également vous opposer au traitement de vos données personnelles ou exercer votre droit à la portabilité des données.
            Pour exercer vos droits ou pour toute question relative à notre politique de confidentialité, veuillez nous contacter via la page de contact disponible sur notre site internet.</p>
        <p class="mt-5"><strong>Modification de la politique de confidentialité :</strong></p>
        <p class="mt-5">Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur notre site internet avec la date d'entrée en vigueur. Nous vous encourageons à consulter régulièrement notre politique de confidentialité pour rester informé de nos pratiques en matière de confidentialité.</p>

    </div>
    <div class="p-5 w-full lg:w-1/2 text-blue-500 underline">
        <RouterLink to="/mentions-legales">
        <p>Mentions Légales</p>
        </RouterLink>
        <RouterLink to="/conditions-generales-d-utilisations">
        <p>Conditions Générales d'Utilisations</p>
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