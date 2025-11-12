import LogoWord from "../atoms/LogoWord";

function FooterLogo() {
  return (
    <div className="logo">
      <LogoWord className="text-3xl pb-5" children="بائعة الكتب" />
      <p className="text-accent-dark text-lg leading-relaxed">
        متجركم المفضل للكتب والأدوات المكتبية التي تلهم الإبداع.
      </p>
    </div>
  );
}

export default FooterLogo;
