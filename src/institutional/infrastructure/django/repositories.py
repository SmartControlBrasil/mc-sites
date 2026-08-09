from src.institutional.domain.entities import HomePage


class StaticHomePageRepository:
    def get_home_page(self) -> HomePage:
        return HomePage(
            title='MC-SITES',
            tagline='Sites. Experiencias. Marketing.',
            status='Projeto em construcao.',
        )


def build_home_page_repository() -> StaticHomePageRepository:
    return StaticHomePageRepository()
