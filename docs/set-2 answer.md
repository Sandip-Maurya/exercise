# Advanced Calculus MCQ Test — Answer Key

Companion to [`advanced-calculus-mcq.md`](./advanced-calculus-mcq.md).

---

### Q1 — **A**

$g(x)$ requires $x^2 - 4 \ge 0$, i.e. $|x| \ge 2$.

Then $f(g(x))$ needs $g(x) \neq 1$, so $\sqrt{x^2-4} \neq 1 \implies x \neq \pm\sqrt{5}$. Since $\sqrt{5} > 2$, among the listed options the domain is $(-\infty,-2]\cup[2,\infty)$ (with $\pm\sqrt{5}$ removed in the exact domain).

### Q2 — **A**

Let $\theta = \cos^{-1}\dfrac{3}{5}$, so $\cos\theta = \dfrac{3}{5}$ and $\sin\theta = \dfrac{4}{5}$ (principal value).

Then $\sin 2\theta = 2\sin\theta\cos\theta = 2\cdot\dfrac{4}{5}\cdot\dfrac{3}{5} = \dfrac{24}{25}$.

### Q3 — **B**

Use Taylor expansions about $x = 0$:

$$\sin x = x - \dfrac{x^3}{6} + O(x^5), \quad \ln(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} + O(x^4).$$

Expanding the numerator through order $x^3$ yields $-\dfrac{x^3}{6} + o(x^3)$, so the limit is $-\dfrac{1}{6}$.

### Q4 — **A**

Write $y = (1+2x)^{1/\sin x}$. Then

$$\ln y = \dfrac{\ln(1+2x)}{\sin x} = \dfrac{\ln(1+2x)}{2x}\cdot\dfrac{2x}{\sin x} \to 1 \cdot 2 = 2$$

as $x \to 0$. Hence $y \to e^2$.

### Q5 — **B**

$$\lim_{x\to 0}\dfrac{\sin(kx)}{x} = \lim_{x\to 0} k\cdot\dfrac{\sin(kx)}{kx} = k.$$

Continuity at $0$ requires $k = 5$.

### Q6 — **B**

Write $z = e^{y\ln x}$ (for $x > 0$). Differentiating with respect to $y$:

$$\dfrac{\partial z}{\partial y} = e^{y\ln x}\cdot\ln x = x^y \ln x.$$

### Q7 — **A**

Differentiate: $3x^2 + 3y^2 y' = 6y + 6x y'$.

Rearrange: $3y^2 y' - 6x y' = 6y - 3x^2$, so

$$y'(y^2 - 2x) = 2y - x^2 \implies y' = \dfrac{2y - x^2}{y^2 - 2x}.$$

### Q8 — **C**

$f'(x) = 4x^3 - 8x = 4x(x^2-2)$. Critical points: $x = 0,\,\pm\sqrt{2}$.

$f''(x) = 12x^2 - 8$: $f''(0) < 0$ (local max), $f''(\pm\sqrt{2}) > 0$ (local minima).

### Q9 — **B**

Rolle's theorem needs continuity on $[-1,1]$ and differentiability on $(-1,1)$.

$|x|-1$ is not differentiable at $x = 0$, so it fails the hypotheses (even though $f(-1) = f(1) = 0$).

### Q10 — **B**

$\sin x = x - \dfrac{x^3}{3!} + \dfrac{x^5}{5!} - \cdots$, so the coefficient of $x^5$ is $-\dfrac{1}{5!} = -\dfrac{1}{120}$.

### Q11 — **A**

Integration by parts: $u = \ln x$, $dv = x^{-2}\,dx$ gives $du = \dfrac{dx}{x}$, $v = -\dfrac{1}{x}$.

$$\int \dfrac{\ln x}{x^2}\,dx = -\dfrac{\ln x}{x} - \int\left(-\dfrac{1}{x}\right)\dfrac{1}{x}\,dx = -\dfrac{\ln x}{x} - \dfrac{1}{x} + C = -\dfrac{\ln x + 1}{x} + C.$$

### Q12 — **A**

Substitute $u = x^2$, $du = 2x\,dx$:

$$\int \dfrac{x}{\sqrt{1+x^4}}\,dx = \dfrac{1}{2}\int \dfrac{du}{\sqrt{1+u^2}} = \dfrac{1}{2}\sinh^{-1} u + C = \dfrac{1}{2}\sinh^{-1}(x^2) + C.$$

### Q13 — **A**

Factor: $x^2 + x - 2 = (x-1)(x+2)$.

Partial fractions: $\dfrac{x+2}{(x-1)(x+2)} = \dfrac{1}{x-1}$ for $x \neq -2$, so the integral is $\ln|x-1| + C$.

### Q14 — **A**

Leibniz rule: $F'(x) = e^{(x^2)^2}\cdot 2x - e^{x^2}\cdot 1 = 2x e^{x^4} - e^{x^2}$.

### Q15 — **B**

$\int_1^{\infty} x^{-p}\,dx$ converges iff $p > 1$. For $p = 1$ (harmonic), it diverges.

The $p = 3/2$ integral converges; $\int_0^1 \sqrt{x}\,dx$ and $\int_0^1 x^{-1/2}\,dx$ both converge.

### Q16 — **A**

Intersections at $x = -1,0,1$. By symmetry,

$$\text{Area} = 2\int_0^1 (x - x^3)\,dx = 2\left[\dfrac{x^2}{2} - \dfrac{x^4}{4}\right]_0^1 = 2\left(\dfrac{1}{2} - \dfrac{1}{4}\right) = \dfrac{1}{2}.$$

### Q17 — **A**

Disk method: $V = \pi\int_0^2 x^2\,dx = \pi\left[\dfrac{x^3}{3}\right]_0^2 = \dfrac{8\pi}{3}$.

### Q18 — **A**

Riemann sum for $\displaystyle\int_0^1 \sqrt{1+x^2}\,dx$.

The antiderivative is $\dfrac{1}{2}\big(x\sqrt{1+x^2} + \ln\big(x + \sqrt{1+x^2}\big)\big)$, so the definite integral equals $\dfrac{1}{2}\big(\sqrt{2} + \ln(1+\sqrt{2})\big)$.

### Q19 — **A**

Separate: $\dfrac{dy}{y} = x\,dx$ gives $\ln|y| = \dfrac{x^2}{2} + C$, so $y = A e^{x^2/2}$.

$y(0) = 3$ implies $A = 3$.

### Q20 — **A**

Integrating factor $\mu = e^{\int 2\,dx} = e^{2x}$.

$$\dfrac{d}{dx}(y e^{2x}) = 1 \implies y e^{2x} = x + C \implies y = (x+C)e^{-2x}.$$

### Q21 — **B**

If $Av = \lambda v$, then $(A^2 + I)v = (\lambda^2 + 1)v$.

For $\lambda = 2$: $4 + 1 = 5$. For $\lambda = -1$: $1 + 1 = 2$. So the eigenvalues are $5$ and $2$.

### Q22 — **B**

$$\operatorname{proj}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a}\cdot\mathbf{b}}{\mathbf{a}\cdot\mathbf{a}}\,\mathbf{a} = \dfrac{3+4}{1+1}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \dfrac{7}{2}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} \dfrac{7}{2} \\ \dfrac{7}{2} \end{pmatrix}.$$

### Q23 — **D**

Expand along the first row (or compute directly):

$$\det(A) = 1\cdot(0\cdot 1 - 1\cdot 1) - 1\cdot(1\cdot 1 - 0\cdot 1) + 0 = -1 - 1 = -2.$$

### Q24 — **C**

Similar matrices satisfy $B = P^{-1}AP$ for invertible $P$, so they share the same characteristic polynomial $\det(A - \lambda I) = \det(B - \lambda I)$ (hence the same eigenvalues). They need not be equal, commute, or be diagonal.

### Q25 — **C**

Rank–nullity: $\operatorname{rank}(A) + \dim(\ker A) = n$.

Here $2 + \dim(\ker A) = 4$, so $\dim(\ker A) = 2$.

---

## Quick Reference

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | A | 11 | A | 21 | B |
| 2 | A | 12 | A | 22 | B |
| 3 | B | 13 | A | 23 | D |
| 4 | A | 14 | A | 24 | C |
| 5 | B | 15 | B | 25 | C |
| 6 | B | 16 | A | | |
| 7 | A | 17 | A | | |
| 8 | C | 18 | A | | |
| 9 | B | 19 | A | | |
| 10 | B | 20 | A | | |