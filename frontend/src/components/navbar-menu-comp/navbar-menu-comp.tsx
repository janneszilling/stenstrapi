import { Component, Host, Prop, Listen, h, State, Element } from '@stencil/core';
import { ScrollHandler } from '../../utils/scroll-handler';

@Component({
  tag: 'navbar-menu-comp',
  styleUrl: 'navbar-menu-comp.scss',
  shadow: true,
})
export class NavbarMenuComp {
  @Element() el: HTMLElement;

  @Prop({ reflect: true, mutable: true }) visible: boolean = false;

  @State() items: HTMLNavbarMenuItemCompElement[] = [];

  @Listen('wheel', { passive: false, target: 'window' })
  handleWheel(event) {
    this.visible && ScrollHandler.cancelScrolling(event);
  }

  @Listen('touchmove', { passive: false, target: 'window' })
  handleTouchMove(event) {
    this.visible && ScrollHandler.cancelScrolling(event);
  }
  @Listen('keydown', { passive: false, target: 'window' })
  handleKeyDown(event: KeyboardEvent) {
    this.visible && event.target === document.body && ScrollHandler.cancelScrollingKeyFilter(event);
  }

  componentWillLoad() {
    //console.log('this.el', this.el);
    console.log('this.el.shadowRoot', this.el.shadowRoot);

    this.el.shadowRoot.addEventListener('slotchange', () => {
      this.items = Array.from(this.el.querySelectorAll('navbar-menu-item-comp'));
      this.items.forEach((item, i) => {
        item.slot = `item-${i}`;
        item.addEventListener('click', this.toggleMenu.bind(this));
      });
    });
  }

  private toggleMenu() {
    this.visible = !this.visible;
  }

  render() {
    //console.log('this.items', this.items);
    return (
      <Host>
        <slot></slot>
        <button class="menu-icon" onClick={() => this.toggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="menu" data-visible={this.visible}>
          <button class="close-icon" onClick={() => this.toggleMenu()}>
            <span></span>
            <span></span>
          </button>
          <div class="menu-nav" onClick={() => this.toggleMenu()}>
            {this.items.map((_, i) => (
              <li>
                <slot name={`item-${i}`}></slot>
              </li>
            ))}
            <slot name="group"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
