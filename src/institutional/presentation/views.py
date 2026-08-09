from django.shortcuts import render

from src.institutional.application.use_cases import GetHomePage
from src.institutional.infrastructure.django.repositories import build_home_page_repository


def home(request):
    use_case = GetHomePage(repository=build_home_page_repository())
    page = use_case.execute()

    return render(
        request,
        'institutional/pages/home.html',
        {'page': page},
    )
