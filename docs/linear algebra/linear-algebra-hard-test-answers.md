# Linear Algebra Test — Answer Key

Companion to [`linear-algebra-hard-test.md`](./linear-algebra-test.md).

---

### Q1 — **B**

Since $A^{2}=A$, one has $A^{k}=A$ for all $k\ge 1$. Expanding by the binomial theorem,
$$
(I+A)^{9}=\sum_{k=0}^{9}\binom{9}{k}A^{k}=I+\Biggl(\sum_{k=1}^{9}\binom{9}{k}\Biggr)A=I+(2^{9}-1)A,
$$
so $k=511$.

### Q2 — **C**

Let $\lvert A\rvert=2$. Then
$$
\operatorname{adj}(\operatorname{adj} A)=\lvert A\rvert A=2A,
$$
$$
\operatorname{adj}\bigl(\operatorname{adj}(\operatorname{adj} A)\bigr)=\operatorname{adj}(2A)=2^{2}\operatorname{adj} A=4\operatorname{adj} A,
$$
$$
\operatorname{adj}\bigl(\operatorname{adj}\bigl(\operatorname{adj}(\operatorname{adj} A)\bigr)\bigr)=\operatorname{adj}(4\operatorname{adj} A)=4^{2}\operatorname{adj}(\operatorname{adj} A)=16\cdot(2A)=32A.
$$

### Q3 — **A**

Since $B=\operatorname{adj} A=\lvert A\rvert A^{-1}=-2A^{-1}$, one has $B^{-1}=-\dfrac{1}{2}A$. Therefore
$$
2A+B^{-1}=2A-\dfrac{1}{2}A=\dfrac{3}{2}A,
$$
and
$$
\lvert 2A+B^{-1}\rvert=\left(\dfrac{3}{2}\right)^{3}\lvert A\rvert=\dfrac{27}{8}\cdot(-2)=-\dfrac{27}{4}.
$$

### Q4 — **B**

From $A^{2}+A+I=O$, multiply by $A-I$:
$$
A^{3}-I=(A-I)(A^{2}+A+I)=O\implies A^{3}=I.
$$
Since $2025=3\cdot 675$, one has $A^{2025}=(A^{3})^{675}=I$.

### Q5 — **C**

Taking the transpose of $P^{T}=3P+I$ and substituting back yields $P=-\dfrac{1}{2}I$. Hence $PX=-\dfrac{1}{2}X$ for every $X$, in particular for some $X\neq O$.

### Q6 — **C**

Express each entry as $(i+j\alpha)^{2}=i^{2}\cdot 1 + 2i\cdot(j\alpha) + 1\cdot(j^{2}\alpha^{2})$. The given matrix decomposes as the product of two matrices:
$$
\begin{bmatrix} (1+\alpha)^{2} & (1+2\alpha)^{2} & (1+3\alpha)^{2} \\ (2+\alpha)^{2} & (2+2\alpha)^{2} & (2+3\alpha)^{2} \\ (3+\alpha)^{2} & (3+2\alpha)^{2} & (3+3\alpha)^{2} \end{bmatrix} = \begin{bmatrix} 1 & 2 & 1 \\ 4 & 4 & 1 \\ 9 & 6 & 1 \end{bmatrix} \begin{bmatrix} 1 & 1 & 1 \\ \alpha & 2\alpha & 3\alpha \\ \alpha^{2} & 4\alpha^{2} & 9\alpha^{2} \end{bmatrix}^{T}.
$$
Taking determinants:
$$
\begin{vmatrix} 1 & 2 & 1 \\ 4 & 4 & 1 \\ 9 & 6 & 1 \end{vmatrix} = -4, \qquad \begin{vmatrix} 1 & 1 & 1 \\ \alpha & 2\alpha & 3\alpha \\ \alpha^{2} & 4\alpha^{2} & 9\alpha^{2} \end{vmatrix} = \alpha^{3}\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 4 & 9 \end{vmatrix} = 2\alpha^{3}.
$$
Hence the determinant equals $(-4)(2\alpha^{3})=-8\alpha^{3}$. (Alternatively, applying $R_{3}\to R_{3}-2R_{2}+R_{1}$ followed by $C_{3}\to C_{3}-2C_{2}+C_{1}$ directly reduces the determinant to $-8\alpha^{3}$.)

Setting $-8\alpha^{3}=-648\alpha$ gives $\alpha(\alpha^{2}-81)=0$. Since $\alpha>0$, we get $\alpha=9$.

### Q7 — **B**

Multiply $2A^{3}-A^{2}+3A+I=O$ on the left by $A^{-1}$:
$$
2A^{2}-A+3I+A^{-1}=O\implies A^{-1}=-(2A^{2}-A+3I).
$$

### Q8 — **B**

Here $A^{n}=\begin{bmatrix} 1 & n \\ 0 & 1 \end{bmatrix}$, so $A^{5}=\begin{bmatrix} 1 & 5 \\ 0 & 1 \end{bmatrix}$ and $\operatorname{adj}(A^{5})=\begin{bmatrix} 1 & -5 \\ 0 & 1 \end{bmatrix}$. Thus
$$
B=5A^{5}+\operatorname{adj}(A^{5})=\begin{bmatrix} 6 & 20 \\ 0 & 6 \end{bmatrix},
$$
and the sum of entries is $32$.

### Q9 — **C**

Using $M^{T}=-M$, $N^{T}=-N$, and $MN=NM$,
$$
\bigl(M^{T}N\bigr)^{-1}=-N^{-1}M^{-1},\qquad \bigl(MN^{-1}\bigr)^{T}=-N^{-1}M.
$$
Hence
$$
M^{2}N^{2}\bigl(M^{T}N\bigr)^{-1}\bigl(MN^{-1}\bigr)^{T}=M^{2}N^{2}(-N^{-1}M^{-1})(-N^{-1}M)=-M^{2}.
$$

### Q10 — **B**

A general $3\times 3$ skew-symmetric matrix is
$$
A=\begin{bmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{bmatrix},
$$
and $\operatorname{tr}(A^{2})=-2(a^{2}+b^{2}+c^{2})$. The condition $\operatorname{tr}(A^{2})=-2$ forces $a^{2}+b^{2}+c^{2}=1$. For integers $(a,b,c)$, the only solutions are the six signed unit vectors along the coordinate axes, giving $6$ matrices.

### Q11 — **C**

For a $3\times 3$ matrix, $\lvert\operatorname{adj} A\rvert=\lvert A\rvert^{2}$. With $\lvert A\rvert=-1$ one gets $\lvert\operatorname{adj} A\rvert=1$.

### Q12 — **B**

$\lvert A^{3}\rvert=\lvert A\rvert^{3}=27$ forces $\lvert A\rvert=3$ (the real cube root). Then $\alpha^{2}-1=3$, so $\alpha=\pm 2$.

### Q13 — **C**

Rewrite as $(A-I)(B-I)=I$. Then $A-I$ and $B-I$ are inverses of each other, so they commute, and therefore $A$ and $B$ commute.

### Q14 — **B**

For a $2\times 2$ matrix, $\operatorname{tr}(A^{2})=\bigl(\operatorname{tr} A\bigr)^{2}-2\lvert A\rvert$. Substituting the given values,
$$
10=16-2\lvert A\rvert\implies\lvert A\rvert=3.
$$

### Q15 — **C**

Each diagonal entry $x$ must satisfy $x^{3}=x$, i.e. $x\in\{-1,0,1\}$. There are $3^{3}=27$ such diagonal matrices.

### Q16 — **A**

Since $A^{T}A=I$,
$$
A^{T}BA=A^{T}(A-A^{T})A=A-A^{T}=B.
$$

### Q17 — **A**

Split the first column as $C_1=C_1'+C_1''$, where
$$
C_1'=\begin{bmatrix} \sqrt{13} \\ \sqrt{26} \\ \sqrt{65} \end{bmatrix}=\sqrt{13}\begin{bmatrix} 1 \\ \sqrt{2} \\ \sqrt{5} \end{bmatrix},\qquad C_1''=\begin{bmatrix} \sqrt{3} \\ \sqrt{15} \\ 3 \end{bmatrix}=\sqrt{3}\begin{bmatrix} 1 \\ \sqrt{5} \\ \sqrt{3} \end{bmatrix}.
$$
Notice that the third column is
$$
C_3=\begin{bmatrix} \sqrt{5} \\ \sqrt{10} \\ 5 \end{bmatrix}=\sqrt{5}\begin{bmatrix} 1 \\ \sqrt{2} \\ \sqrt{5} \end{bmatrix}=\dfrac{\sqrt{5}}{\sqrt{13}}C_1'.
$$
Since $C_1'$ is proportional to $C_3$, the determinant formed with $C_1'$ as its first column vanishes.

For the remaining determinant, factor $\sqrt{3}$ from $C_1''$, $\sqrt{5}$ from $C_2$, and $\sqrt{5}$ from $C_3$:
$$
\begin{vmatrix} \sqrt{3} & 2\sqrt{5} & \sqrt{5} \\ \sqrt{15} & 5 & \sqrt{10} \\ 3 & \sqrt{15} & 5 \end{vmatrix}=5\sqrt{3}\begin{vmatrix} 1 & 2 & 1 \\ \sqrt{5} & \sqrt{5} & \sqrt{2} \\ \sqrt{3} & \sqrt{3} & \sqrt{5} \end{vmatrix}.
$$
Performing $C_2\to C_2-C_1$ produces
$$
5\sqrt{3}\begin{vmatrix} 1 & 1 & 1 \\ \sqrt{5} & 0 & \sqrt{2} \\ \sqrt{3} & 0 & \sqrt{5} \end{vmatrix}=5\sqrt{3}\cdot(-1)\begin{vmatrix} \sqrt{5} & \sqrt{2} \\ \sqrt{3} & \sqrt{5} \end{vmatrix}=5\sqrt{3}(\sqrt{6}-5).
$$

### Q18 — **C**

The identity holds with $k=2$, so the value is
$$
2\cdot 1\cdot 2\cdot 3\cdot 6^{3}=12\cdot 216=2592.
$$

### Q19 — **B**

This is a Vandermonde determinant in $1$, $\dfrac{1}{2}$, $0$:
$$
\biggl(\dfrac{1}{2}-1\biggr)(0-1)\biggl(0-\dfrac{1}{2}\biggr)=\biggl(-\dfrac{1}{2}\biggr)(-1)\biggl(-\dfrac{1}{2}\biggr)=-\dfrac{1}{4}.
$$

### Q20 — **C**

$f(x)=(x-1)^{2}(x+2)$, so
$$
f'(x)=2(x-1)(x+2)+(x-1)^{2}=3(x-1)(x+1).
$$
Thus $f'(2)=9$.

### Q21 — **C**

Factoring gives
$$
(a-b)(b-c)(c-a)\bigl(abc(ab+bc+ca)-(a+b+c)\bigr)=0.
$$
With $a$, $b$, $c$ distinct one needs $abc(ab+bc+ca)=a+b+c$, whence the displayed quotient equals $3$.

### Q22 — **D**

Factoring $2^{i}$ from row $i$ and $2^{j}$ from column $j$ multiplies the determinant by
$$
2^{1+2+3}\cdot 2^{1+2+3}=2^{12}.
$$
Hence $\lvert Q\rvert=2^{12}\lvert P\rvert=2^{13}$.

### Q23 — **D**

The determinant expands to $x^{3}-14x+12$. Its derivative $3x^{2}-14$ has two real zeros and the cubic changes sign three times, so there are three distinct real roots.

### Q24 — **C**

$$
\Delta=abc+ab+bc+ca.
$$
For $x^{3}+3x^{2}+4x+1=0$ one has $ab+bc+ca=4$ and $abc=-1$, so $\Delta=3$.

### Q25 — **A**

$AB=A(\operatorname{adj} A)=\lvert A\rvert I=-3I$, so
$$
\lvert AB+2I\rvert=\lvert -I\rvert=(-1)^{3}=-1.
$$

### Q26 — **C**

Row operations (or direct expansion) yield the constant value $f(x)=2$ for all $x$. In particular $f\!\left(\dfrac{\pi}{4}\right)=2$.

### Q27 — **B**

Since $\omega\neq 1$ is a root of $x^{3}-1=(x-1)(x^{2}+x+1)=0$, it satisfies $\omega^{2}+\omega+1=0$ and $\omega^{3}=1$. Thus $-1-\omega^{2}=\omega$ and $\omega^{4}=\omega$, so the matrix becomes
$$
\begin{bmatrix} 1 & 1 & 1 \\ 1 & \omega & \omega^{2} \\ 1 & \omega^{2} & \omega \end{bmatrix}.
$$
Performing $C_2\to C_2-C_1$ and $C_3\to C_3-C_1$:
$$
\begin{vmatrix} 1 & 0 & 0 \\ 1 & \omega-1 & \omega^{2}-1 \\ 1 & \omega^{2}-1 & \omega-1 \end{vmatrix}=(\omega-1)^{2}-(\omega^{2}-1)^{2}=(\omega-1)^{2}\bigl(1-(\omega+1)^{2}\bigr).
$$
Since $\omega+1=-\omega^{2}$, the second factor is $1-\omega^{4}=1-\omega=-(\omega-1)$. Hence the determinant is
$$
-(\omega-1)^{3}=-(\omega^{3}-3\omega^{2}+3\omega-1)=-(1-3\omega^{2}+3\omega-1)=3\omega^{2}-3\omega=3\omega(\omega-1).
$$

### Q28 — **A**

Using $A^{T}=A$ and $B^{T}=-B$,
$$
(AB-BA)^{T}=B^{T}A^{T}-A^{T}B^{T}=(-B)A-A(-B)=-BA+AB=AB-BA.
$$
So $AB-BA$ is symmetric (and equals its own transpose).

### Q29 — **C**

The relation $AB-BA=A$ rearranges to $B-I=A^{-1}BA$ and $A^{-1}(B+I)A=B$. Taking determinants, $\lvert B-I\rvert=\lvert B\rvert=3$ and $\lvert B+I\rvert=\lvert B\rvert=3$, so the sum is $6$.

### Q30 — **B**

For order $3$, $\lvert\operatorname{adj}(A^{-1})\rvert=\lvert A^{-1}\rvert^{2}=\dfrac{1}{\lvert A\rvert^{2}}=\dfrac{1}{4}$. Also
$$
A^{-1}(\operatorname{adj} A)=A^{-1}(\lvert A\rvert A^{-1})=\lvert A\rvert A^{-2},
$$
so
$$
\lvert A^{-1}(\operatorname{adj} A)\rvert=\lvert A\rvert^{3}\cdot\lvert A\rvert^{-2}=\lvert A\rvert=2.
$$
The required sum is $\dfrac{1}{4}+2=\dfrac{9}{4}$.

---

## Quick Reference

| Q | Answer | Q | Answer | Q | Answer |
|---|--------|---|--------|---|--------|
| 1 | B | 11 | C | 21 | C |
| 2 | C | 12 | B | 22 | D |
| 3 | A | 13 | C | 23 | D |
| 4 | B | 14 | B | 24 | C |
| 5 | C | 15 | C | 25 | A |
| 6 | C | 16 | A | 26 | C |
| 7 | B | 17 | A | 27 | B |
| 8 | B | 18 | C | 28 | A |
| 9 | C | 19 | B | 29 | C |
| 10 | B | 20 | C | 30 | B |
