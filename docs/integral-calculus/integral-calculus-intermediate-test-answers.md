# Integral Calculus Intermediate–Hard Test — Answer Key

Companion to [`integral-calculus-intermediate-test.md`](./integral-calculus-intermediate-test.md).

---

### Q1 — **A**

Let $I=\displaystyle\int_{-1}^{1}\dfrac{(\sin^{-1}x)^{2}}{1+e^{\sin x}}\,dx$. Replacing $x$ by $-x$ and adding gives
$$
2I=\int_{-1}^{1}(\sin^{-1}x)^{2}\,dx.
$$
With $x=\sin\theta$, this is $2\displaystyle\int_{0}^{\pi/2}\theta^{2}\cos\theta\,d\theta=\dfrac{\pi^{2}}{2}-4$, so $I=\dfrac{\pi^{2}-8}{4}$.

### Q2 — **B**

$$
\dfrac{1}{(1+x^{2})(1+x^{4})}=\dfrac{1}{2}\left(\dfrac{1}{1+x^{2}}+\dfrac{1-x^{2}}{1+x^{4}}\right).
$$
$\displaystyle\int_{0}^{\infty}\dfrac{dx}{1+x^{2}}=\dfrac{\pi}{2}$ and $\displaystyle\int_{0}^{\infty}\dfrac{1-x^{2}}{1+x^{4}}\,dx=0$ (substitute $x\mapsto 1/x$), so the integral equals $\dfrac{\pi}{4}$.

### Q3 — **A**

With $u=2x$,
$$
\int_{0}^{\pi/2}\ln(\sin 2x)\,dx=\dfrac{1}{2}\int_{0}^{\pi}\ln(\sin u)\,du=\int_{0}^{\pi/2}\ln(\sin u)\,du=-\dfrac{\pi}{2}\ln 2.
$$

### Q4 — **A**

For $n>1$,
$$
I_{n}+I_{n-2}=\int_{0}^{\pi/4}\tan^{n-2}x\sec^{2}x\,dx=\dfrac{1}{n-1}.
$$
Hence $I_{6}+I_{4}=\dfrac{1}{5}$.

### Q5 — **A**

Let $I=\displaystyle\int_{0}^{1}\dfrac{\tan^{-1}x}{1+x}\,dx$. The substitution $x=\dfrac{1-t}{1+t}$ yields $I=\dfrac{\pi}{4}\ln 2-I$, so $I=\dfrac{\pi}{8}\ln 2$.

### Q6 — **C**

$(1+x)(1+x^{2})(1+x^{4})=\dfrac{1-x^{8}}{1-x}=\sum_{r=0}^{7}x^{r}$ for $x\neq 1$. Integrating on $[0,1]$ gives $\sum_{r=1}^{8}\dfrac{1}{r}$, so $k=8$.

### Q7 — **A**

$\sin x=\cos x$ at $x=\dfrac{\pi}{4}$. Thus
$$
\int_{0}^{\pi/4}\cos x\,dx+\int_{\pi/4}^{\pi/2}\sin x\,dx=\sqrt{2}.
$$

### Q8 — **A**

Put $u=x^{4}$, so $du=4x^{3}\,dx$:
$$
\dfrac{1}{4}\int\dfrac{du}{(u+2)^{2}+9}=\dfrac{1}{12}\tan^{-1}\!\left(\dfrac{x^{4}+2}{3}\right)+C.
$$

### Q9 — **A**

Split at integers:
$$
\int_{0}^{1}x\,dx+\int_{1}^{2}e(x-1)\,dx=\dfrac{1}{2}+\dfrac{e}{2}=\dfrac{e+1}{2}.
$$

### Q10 — **A**

The substitution $x=1/t$ shows $\displaystyle\int_{0}^{\infty}\dfrac{\ln x}{1+x^{2}}\,dx=-\displaystyle\int_{0}^{\infty}\dfrac{\ln x}{1+x^{2}}\,dx$, so the integral is $0$.

### Q11 — **C**

Put $u=\sin^{-1}x$: $\displaystyle\int_{0}^{\pi/2}u\,du=\dfrac{\pi^{2}}{8}$.

### Q12 — **A**

Let $I=\displaystyle\int_{0}^{\pi/2}\dfrac{\sin^{2}x}{\sin x+\cos x}\,dx$. Using $x\mapsto\dfrac{\pi}{2}-x$ and adding,
$$
2I=\int_{0}^{\pi/2}\dfrac{dx}{\sin x+\cos x}=\dfrac{1}{\sqrt{2}}\int_{\pi/4}^{3\pi/4}\csc\theta\,d\theta=\sqrt{2}\ln(1+\sqrt{2}).
$$
Hence $I=\dfrac{1}{\sqrt{2}}\ln(1+\sqrt{2})$.

### Q13 — **B**

The curves meet at $x=\pm 1$. Area $=2\displaystyle\int_{0}^{1}(x-x^{2})\,dx=\dfrac{1}{3}$.

### Q14 — **B**

Intersection points $(0,0)$ and $(8,8)$. Common area
$$
\int_{0}^{8}\left(\sqrt{8x}-\dfrac{x^{2}}{8}\right)dx=\dfrac{64}{3}.
$$

### Q15 — **A**

$x^{2}=\dfrac{2}{1+x^{2}}$ at $x=\pm 1$. For $|x|\le 1$ the min is $x^{2}$; outside it is $\dfrac{2}{1+x^{2}}$. Area
$$
2\left(\int_{0}^{1}x^{2}\,dx+\int_{1}^{2}\dfrac{2}{1+x^{2}}\,dx\right)=\dfrac{2}{3}+4\tan^{-1}2-\pi.
$$

### Q16 — **A**

Zeros of $x^{2}-4$ are $x=\pm 2$. Total area
$$
2\int_{2}^{3}(x^{2}-4)\,dx+\int_{-2}^{2}(4-x^{2})\,dx=\dfrac{46}{3}.
$$

### Q17 — **A**

First-quadrant elliptical sector minus the triangle under the chord:
$$
\dfrac{1}{4}\pi\cdot 4\cdot 3-\dfrac{1}{2}\cdot 4\cdot 3=3(\pi-2).
$$

### Q18 — **C**

Homogeneous: $v=\dfrac{y}{x}$ yields $\arctan v-\dfrac{1}{2}\ln(1+v^{2})=\ln|x|+C$, hence
$$
x^{2}+y^{2}=C\,e^{2\tan^{-1}(y/x)}.
$$

### Q19 — **B**

Differentiate: $xf'+2f=(1+x)e^{x}$. Solving with $f(1)=e$ gives
$$
f(x)=e^{x}\left(1-\dfrac{1}{x}+\dfrac{1}{x^{2}}\right),\qquad f(2)=\dfrac{3e^{2}}{4}.
$$

### Q20 — **A**

Integrating factor $\sec^{2}x$ yields $y=\cos x+C\cos^{2}x$. With $y\!\left(\dfrac{\pi}{3}\right)=0$, $C=-2$. Then $y=\cos x-2\cos^{2}x$ has maximum $\dfrac{1}{8}$ at $\cos x=\dfrac{1}{4}$.

### Q21 — **B**

$y=Ae^{2x}+Be^{-3x}$ has characteristic equation $(r-2)(r+3)=0$, i.e. $r^{2}+r-6=0$, so
$$
\dfrac{d^{2}y}{dx^{2}}+\dfrac{dy}{dx}-6y=0.
$$

### Q22 — **C**

With $v=\dfrac{y}{x}$: $\dfrac{1-v^{2}}{2v}\,dx=x\,dv$ integrates to $x^{2}-y^{2}=Ax$. Through $(2,1)$: $A=\dfrac{3}{2}$, so $2(x^{2}-y^{2})=3x$.

### Q23 — **A**

From $x^{2}+y^{2}=2ax$, $y'=\dfrac{y^{2}-x^{2}}{2xy}$. Orthogonal slopes satisfy $y'=-\dfrac{2xy}{y^{2}-x^{2}}$, whose solutions are $x^{2}+y^{2}=2by$.

### Q24 — **D**

Let $c=\displaystyle\int_{0}^{1}y(t)\,dt$. Then $y=\dfrac{x^{2}}{2}+cx+1$. Matching $c$ gives $c=\dfrac{7}{3}$, and
$$
\int_{0}^{1}xy(x)\,dx=\dfrac{101}{72}.
$$

### Q25 — **B**

$I_{n}+I_{n-2}=\dfrac{1}{n-1}$, so $(2n+1)(I_{n}+I_{n-2})=\dfrac{2n+1}{n-1}\to 2$ as $n\to\infty$.

---

## Quick Reference

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | A | 11 | C | 21 | B |
| 2 | B | 12 | A | 22 | C |
| 3 | A | 13 | B | 23 | A |
| 4 | A | 14 | B | 24 | D |
| 5 | A | 15 | A | 25 | B |
| 6 | C | 16 | A | | |
| 7 | A | 17 | A | | |
| 8 | A | 18 | C | | |
| 9 | A | 19 | B | | |
| 10 | A | 20 | A | | |
