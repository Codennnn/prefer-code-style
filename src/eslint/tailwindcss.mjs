import tailwind from 'eslint-plugin-tailwindcss'

const recommended = tailwind.configs['flat/recommended'] ?? tailwind.configs.recommended

export default Array.isArray(recommended) ? recommended : [recommended]
