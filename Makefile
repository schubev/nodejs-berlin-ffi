all: slides handout

slides: slides.pdf
handout: handout.pdf

handout.pdf: handout_slides.pdf
	pdflatex handout

%.pdf : %.tex content.tex
	pdflatex $<
	pdflatex $<

clean:
	rm -f *.aux *.log *.nav *.out *.snm *.toc *.vrb

fclean: clean
	rm -f slides.pdf handout.pdf handout_slides.pdf

re: fclean all
