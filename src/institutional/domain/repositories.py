from typing import Protocol

from .entities import HomePage


class HomePageRepository(Protocol):
    def get_home_page(self) -> HomePage:
        """Return the public home page content."""
