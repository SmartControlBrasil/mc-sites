from src.institutional.domain.entities import HomePage
from src.institutional.domain.repositories import HomePageRepository


class GetHomePage:
    def __init__(self, repository: HomePageRepository) -> None:
        self.repository = repository

    def execute(self) -> HomePage:
        return self.repository.get_home_page()
