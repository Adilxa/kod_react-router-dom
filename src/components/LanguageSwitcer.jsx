import { useTranslation } from "react-i18next"

const LanguageSwithcer = () => {

    const { i18n } = useTranslation()

    return <div>
        <button onClick={() => i18n.changeLanguage('en')}>Engl</button>
        <button onClick={() => i18n.changeLanguage('ru')}>Рус</button>
    </div>
}


export default LanguageSwithcer;