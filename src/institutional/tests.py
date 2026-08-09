import ast
from pathlib import Path

from django.test import SimpleTestCase
from django.urls import reverse


class HomePageTests(SimpleTestCase):
    def test_home_returns_200(self):
        response = self.client.get(reverse('institutional:home'))

        self.assertEqual(response.status_code, 200)

    def test_home_uses_expected_template(self):
        response = self.client.get(reverse('institutional:home'))

        self.assertTemplateUsed(response, 'institutional/pages/home.html')


class DomainBoundaryTests(SimpleTestCase):
    def test_domain_modules_do_not_import_django(self):
        domain_path = Path(__file__).resolve().parent / 'domain'

        for source_file in domain_path.glob('*.py'):
            tree = ast.parse(source_file.read_text(encoding='utf-8'))
            imports = [
                node
                for node in ast.walk(tree)
                if isinstance(node, (ast.Import, ast.ImportFrom))
            ]

            imported_names = []
            for node in imports:
                if isinstance(node, ast.Import):
                    imported_names.extend(alias.name for alias in node.names)
                elif node.module:
                    imported_names.append(node.module)

            self.assertFalse(
                any(name == 'django' or name.startswith('django.') for name in imported_names),
                f'{source_file} imports Django',
            )
