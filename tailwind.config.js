module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',

    },
    extend: {
      colors:{
        primary:'#0369a1',
        secondary:'#64748b',
        dark:'#0f172a',
        green:'#34d399',
        red:'#FF0000'
        
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      screens:{
        '2xl':'1420px',
      }
    },
  },
  plugins: [],
}
