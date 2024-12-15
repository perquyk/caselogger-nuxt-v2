import { defineStore } from 'pinia'
export const useFormStore = defineStore('formStore', {
    state: () => ({
        klantnummer: '',
        task: '',
        adres: '',
        omschrijving: '',
        testen: '',
        catsap: '',
        filter: '',
        streetping: '',
        acties: '',
        materiaal: '',
        resultaat: '',
        modemtest: '',
        aankomstPNM: '',
        sleutelvast: '',
        conn: '',
        cmVervangen: '',
        tdrDone: '',
        vp: '',
        connTapReplace: '',
        connNIUReplace: '',
        verlengReplace: '',
        dropReplace: '',
        hpReplace: '',
        ingress: '',
        tapniulength: '',
        niutaplength: '',
        tapniuevents: '',
        niutapevents: '',
        vertrekPnm: '',
        patchlength: '',
        mdrpos: '',
        rechtspos: '',
        gsxInstallType: '',
        gsxOldSetup: '',
        hfc: '',
        voip: '',
        IadTestArgus: '',
        IadTestPBX: '',
        remarks: '',
        managed: '',
        niu: '',
        router: '',
        modemtype: '',
        mainSpeedDown: '',
        mainSpeedUp: '',
        buSpeedDown: '',
        buSpeedUp: '',
        failover: '',
        main: '',
        backup: '',
    }),
})
