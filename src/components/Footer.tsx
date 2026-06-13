"use client";

export default function Footer() {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="w-full py-16 bg-surface-container border-t border-outline-variant/30 pb-32 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Brand & Copy */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-headline-md text-headline-md text-primary mb-4 italic">
              MilletPure
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">
              &copy; {new Date().getFullYear()} MilletPure. Rooted in Tradition, Crafted for Wellness.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h5 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-wider">
              Explore
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Shop All
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-secondary font-bold"
                  href="#"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Recipes
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Wholesale
                </a>
              </li>
            </ul>
          </div>

          {/* Assistance Links */}
          <div>
            <h5 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-wider">
              Assistance
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h5 className="font-label-md text-label-md text-primary mb-6 uppercase tracking-wider">
              Legal
            </h5>
            <ul className="space-y-4">
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Bottom Sticky NavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-margin-mobile py-3 md:hidden bg-surface shadow-[0px_-4px_20px_rgba(78,93,52,0.08)] z-50 rounded-t-xl border-t border-outline-variant/10">
        <button
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          onClick={() => {}}
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-md text-[10px] uppercase tracking-wider mt-0.5">Home</span>
        </button>
        
        <button
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          onClick={() => {}}
        >
          <span className="material-symbols-outlined">storefront</span>
          <span className="font-label-md text-[10px] uppercase tracking-wider mt-0.5">Shop</span>
        </button>
        
        <button
          className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          onClick={() => {}}
        >
          <span className="material-symbols-outlined">shopping_basket</span>
          <span className="font-label-md text-[10px] uppercase tracking-wider mt-0.5">Cart</span>
        </button>
        
        <button
          className="flex flex-col items-center justify-center text-primary font-bold bg-secondary-container/20 rounded-full px-4 py-1 cursor-pointer"
          onClick={() => {}}
        >
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-md text-[10px] uppercase tracking-wider mt-0.5">Account</span>
        </button>
      </nav>
    </>
  );
}
