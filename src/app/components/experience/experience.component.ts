import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {

	anchorX: number;
	anchorY: number;

	eyeAnimation = (e: any) => {
		const mouseX = e.clientX;
		const mouseY = e.clientY;

		const angleDeg = this.angle(mouseX, mouseY, this.anchorX, this.anchorY);

		const eyes = document.querySelectorAll('.eye');
		eyes.forEach((eye: any) => {
			eye.style.transform = `rotate(${90 + angleDeg}deg)`;
		})
	}

	calcAnchor = (_?: any) => {
		const anchor = document.getElementById('anchor');
		const rekt = anchor!.getBoundingClientRect();
		this.anchorX = rekt.left + rekt.width/2;
		this.anchorY = rekt.top + rekt.height/2;
	}

	angle(cx: any, cy: any, ex: any, ey: any) {
		const dy = ey - cy;
		const dx = ex - cx;
		const rad = Math.atan2(dy, dx);
		const deg = rad * 180 / Math.PI;
		return deg;
	}

	ngAfterViewInit(): void {
		addEventListener('mousemove', this.eyeAnimation);
		addEventListener("resize", this.calcAnchor);
		document.getElementById("sideNavContent")!.addEventListener('scroll', this.calcAnchor);

		this.calcAnchor();
	}

	ngOnDestroy(): void {
		removeEventListener('mousemove', this.eyeAnimation);
		removeEventListener("resize", this.calcAnchor);
		document.getElementById("sideNavContent")!.removeEventListener('scroll', this.calcAnchor);
	}
}
