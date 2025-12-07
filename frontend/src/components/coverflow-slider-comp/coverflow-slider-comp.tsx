import { Component, Element, Host, State, h } from '@stencil/core';

@Component({
  tag: 'coverflow-slider-comp',
  styleUrl: 'coverflow-slider-comp.scss',
  shadow: true,
})
export class CoverflowSliderComp {
  @Element() el: HTMLElement;

  @State() slides: HTMLCoverflowSlideCompElement[] = [];

  componentWillLoad() {
    console.log('el', this.el);
    console.log('this.el.shadowRoot', this.el.shadowRoot);

    this.el.shadowRoot.addEventListener('slotchange', () => {
      this.slides = Array.from(this.el.querySelectorAll('coverflow-slide-comp'));
      this.slides.forEach((slide, i) => {
        slide.slot = `slide-${i}`;
      });
    });
  }

  render() {
    console.log('this.slides', this.slides);
    return (
      <Host>
        <slot></slot>
        {this.slides.map((_, i) => (
          <li>
            <slot name={`slide-${i}`}></slot>
          </li>
        ))}
      </Host>
    );
  }
}
