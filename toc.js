// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Table of content</li><li class="chapter-item expanded "><a href="index.html"><strong aria-hidden="true">1.</strong> Linux</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="driver.html"><strong aria-hidden="true">1.1.</strong> Driver</a></li><li class="chapter-item expanded "><a href="suckless.html"><strong aria-hidden="true">1.2.</strong> Suckless</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="suckless-ubu.html"><strong aria-hidden="true">1.2.1.</strong> Ubuntu</a></li><li class="chapter-item expanded "><a href="suckless-void.html"><strong aria-hidden="true">1.2.2.</strong> Void</a></li><li class="chapter-item expanded "><a href="suckless-arch.html"><strong aria-hidden="true">1.2.3.</strong> Arch</a></li></ol></li><li class="chapter-item expanded "><a href="ubuntu/index.html"><strong aria-hidden="true">1.3.</strong> Ubuntu</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ubuntu/apt.html"><strong aria-hidden="true">1.3.1.</strong> apt</a></li></ol></li><li class="chapter-item expanded "><a href="arch/index.html"><strong aria-hidden="true">1.4.</strong> Arch</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="arch/arch-scratch.html"><strong aria-hidden="true">1.4.1.</strong> Install Arch</a></li></ol></li><li class="chapter-item expanded "><a href="void/index.html"><strong aria-hidden="true">1.5.</strong> Void Linux</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="void/gpu.html"><strong aria-hidden="true">1.5.1.</strong> Gpu</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="git/index.html"><strong aria-hidden="true">2.</strong> Git</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="git/local.html"><strong aria-hidden="true">2.1.</strong> Local</a></li><li class="chapter-item expanded "><a href="git/search.html"><strong aria-hidden="true">2.2.</strong> Search</a></li><li class="chapter-item expanded "><a href="git/unshalow.html"><strong aria-hidden="true">2.3.</strong> Unshalow</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="ssh/index.html"><strong aria-hidden="true">3.</strong> ssh</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ssh/keys.html"><strong aria-hidden="true">3.1.</strong> Generate keys</a></li><li class="chapter-item expanded "><a href="ssh/github.html"><strong aria-hidden="true">3.2.</strong> Github</a></li><li class="chapter-item expanded "><a href="ssh/gitlab.html"><strong aria-hidden="true">3.3.</strong> Gitlab</a></li><li class="chapter-item expanded "><a href="ssh/forward.html"><strong aria-hidden="true">3.4.</strong> forward ip and port</a></li></ol></li><li class="chapter-item expanded "><a href="mail.html"><strong aria-hidden="true">4.</strong> Mail</a></li><li class="chapter-item expanded affix "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="network.html"><strong aria-hidden="true">5.</strong> network</a></li><li class="chapter-item expanded affix "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="cli/index.html"><strong aria-hidden="true">6.</strong> CLI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="cli/awk.html"><strong aria-hidden="true">6.1.</strong> awk</a></li><li class="chapter-item expanded "><a href="cli/cp.html"><strong aria-hidden="true">6.2.</strong> cp and skips</a></li><li class="chapter-item expanded "><a href="cli/date.html"><strong aria-hidden="true">6.3.</strong> Date</a></li><li class="chapter-item expanded "><a href="cli/stow.html"><strong aria-hidden="true">6.4.</strong> Stow</a></li><li class="chapter-item expanded "><a href="cli/squashfs.html"><strong aria-hidden="true">6.5.</strong> Squashfs</a></li><li class="chapter-item expanded "><a href="cli/man.html"><strong aria-hidden="true">6.6.</strong> Man</a></li><li class="chapter-item expanded "><a href="pdf.html"><strong aria-hidden="true">6.7.</strong> Pdf</a></li><li class="chapter-item expanded "><a href="cli/adb.html"><strong aria-hidden="true">6.8.</strong> adb</a></li><li class="chapter-item expanded "><a href="cli/grub.html"><strong aria-hidden="true">6.9.</strong> Grub</a></li><li class="chapter-item expanded "><a href="cli/gdrive.html"><strong aria-hidden="true">6.10.</strong> Gdrive</a></li></ol></li><li class="chapter-item expanded "><a href="app.html"><strong aria-hidden="true">7.</strong> App</a></li><li class="chapter-item expanded affix "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="fix/index.html"><strong aria-hidden="true">8.</strong> FIX</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="fix/fix-sound.html"><strong aria-hidden="true">8.1.</strong> sound</a></li><li class="chapter-item expanded "><a href="fix/fix-bluetooth.html"><strong aria-hidden="true">8.2.</strong> fix-bluetooth</a></li><li class="chapter-item expanded "><a href="fix/fix-tmux.html"><strong aria-hidden="true">8.3.</strong> tmux</a></li><li class="chapter-item expanded "><a href="fix/fix-zsh.html"><strong aria-hidden="true">8.4.</strong> zsh</a></li><li class="chapter-item expanded "><a href="fix/systemd.html"><strong aria-hidden="true">8.5.</strong> systemd</a></li><li class="chapter-item expanded "><a href="fix/mdbook.html"><strong aria-hidden="true">8.6.</strong> mdbook</a></li><li class="chapter-item expanded "><a href="fix/backlight.html"><strong aria-hidden="true">8.7.</strong> xbackligh and sceen saver</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="setting/index.html"><strong aria-hidden="true">9.</strong> SETTING</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="setting/wifi.html"><strong aria-hidden="true">9.1.</strong> Wifi</a></li><li class="chapter-item expanded "><a href="setting/brightness.html"><strong aria-hidden="true">9.2.</strong> Brightness</a></li><li class="chapter-item expanded "><a href="setting/gtk.html"><strong aria-hidden="true">9.3.</strong> Gtk</a></li><li class="chapter-item expanded "><a href="setting/swapfile.html"><strong aria-hidden="true">9.4.</strong> Swapfile</a></li><li class="chapter-item expanded "><a href="setting/PS1.html"><strong aria-hidden="true">9.5.</strong> PS1</a></li><li class="chapter-item expanded "><a href="setting/mount.html"><strong aria-hidden="true">9.6.</strong> Mount</a></li><li class="chapter-item expanded "><a href="setting/keybroard.html"><strong aria-hidden="true">9.7.</strong> Keybroard</a></li><li class="chapter-item expanded "><a href="setting/sleep.html"><strong aria-hidden="true">9.8.</strong> Sleep and Hibernation</a></li><li class="chapter-item expanded "><a href="setting/wayland.html"><strong aria-hidden="true">9.9.</strong> Wayland</a></li></ol></li><li class="chapter-item expanded "><li class="part-title"></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded "><a href="information/index.html"><strong aria-hidden="true">10.</strong> INFORMATION</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="information/info.html"><strong aria-hidden="true">10.1.</strong> pc info</a></li><li class="chapter-item expanded "><a href="information/chroot_GUI.html"><strong aria-hidden="true">10.2.</strong> Chroot GUI</a></li><li class="chapter-item expanded "><a href="information/chroot_ToBsd.html"><strong aria-hidden="true">10.3.</strong> Chroot To Bsd</a></li><li class="chapter-item expanded "><a href="information/class-windows.html"><strong aria-hidden="true">10.4.</strong> Class of windows</a></li><li class="chapter-item expanded "><a href="information/how-to-virifi.sig.html"><strong aria-hidden="true">10.5.</strong> How to virifi sig</a></li><li class="chapter-item expanded "><a href="information/du-h.html"><strong aria-hidden="true">10.6.</strong> du</a></li><li class="chapter-item expanded "><a href="information/screanshot.html"><strong aria-hidden="true">10.7.</strong> Screanshot</a></li><li class="chapter-item expanded "><a href="information/binnary.html"><strong aria-hidden="true">10.8.</strong> use non compatible binnary</a></li><li class="chapter-item expanded "><a href="information/pytorch.html"><strong aria-hidden="true">10.9.</strong> pyTorch</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
