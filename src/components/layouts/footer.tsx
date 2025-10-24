export default function Footer() {
    return (
      <footer id="footer" className="">
        <div  className="block-container py-4 border-t  flex gap-6 flex-col lg:flex-row justify-between items-center">
          <div className="flex"><a href="/policy">Politique de confidentialité</a></div>
          <div className="flex text-xs">©{new Date().getFullYear()} Donald Nkouathio</div>
        </div>
      </footer>
    )
}