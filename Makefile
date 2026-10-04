REPO:=$(shell git rev-parse --show-toplevel)/gh-pages	
build:
	@echo "run gh-pages"
	@gh-pages
	@echo "Done"

clean:
	@rm -rf $(REPO)
	@git worktree prune 2>/dev/null || true
	@git worktree remove $(REPO) --force 2>/dev/null || true
	@echo "clean is Done"

check:
	@find src -type f -name '*.md' ! -name 'SUMMARY.md' | \
	while read -r file; do \
		grep -Fq "$${file#src/}" src/SUMMARY.md || echo "$$file"; \
	done
